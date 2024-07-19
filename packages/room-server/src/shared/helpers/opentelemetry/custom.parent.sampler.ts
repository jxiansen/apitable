import { Context, Link, Sampler, SamplingDecision, SpanAttributes, SpanKind } from '@opentelemetry/api';

export class CustomParentBasedSampler implements Sampler {
  private FIXED_RULES: Map<string, ICustomizeSampler> = new Map();

  constructor() {
    this.init_fixed_rules();
  }

  shouldSample(_parentContext: Context, traceId: string, name: string, _kind: SpanKind, _attributes: SpanAttributes, _links: Link[]) {
    if (!this.FIXED_RULES.has(name)) {
      return { decision: SamplingDecision.RECORD_AND_SAMPLED };
    }

    const { sampleRate } = this.FIXED_RULES.get(name)!;

    const rate = sampleRate >= 0 && sampleRate <= 1 ? sampleRate : 1;
    const hash = traceId ? parseInt(traceId.substring(8), 16) : undefined;
    const probability = hash !== undefined ? hash % 100 < rate * 100 : Math.random() < rate;

    return { decision: probability ? SamplingDecision.RECORD_AND_SAMPLED : SamplingDecision.NOT_RECORD };
  }

  private init_fixed_rules() {
    this.FIXED_RULES.set('Controller->ActuatorController.healthCheck', { sampleRate: 0.1 }).set('Event->HttpRequestDurationSeconds.undefined', {
      sampleRate: 0.1,
    });
  }
}

interface ICustomizeSampler {
  sampleRate: number;
}
