import { IErrorListProps } from '../../interface';

export default function DefaultErrorList(props: IErrorListProps) {
  const { errors } = props;
  const newErrors = Array.from(new Set(errors.map((r) => r.stack)));
  console.log(errors);
  console.log(newErrors);
  return (
    <div className="panel panel-danger errors">
      <div className="panel-heading">
        <h3 className="panel-title">Errors</h3>
      </div>
      <ul className="list-group">
        {newErrors.map((error: any, i: number) => {
          return (
            <li key={i} className="list-group-item text-danger">
              {error.stack}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
