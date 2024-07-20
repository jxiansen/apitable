import dynamic from 'next/dynamic';
import React from 'react';

const TemplateCentre = dynamic(() => import('pc/components/template_centre/template_centre'), { ssr: false });
const TemplatePreview = dynamic(() => import('pc/components/template_centre/template_preview'), { ssr: true });

const App = () => {
  return (
    <>
      <TemplateCentre>
        <TemplatePreview />
      </TemplateCentre>
    </>
  );
};

export default App;
