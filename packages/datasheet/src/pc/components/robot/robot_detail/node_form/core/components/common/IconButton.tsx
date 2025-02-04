export default function IconButton(props: any) {
  const { type = 'default', icon, className, ...otherProps } = props;
  return (
    <button type="button" className={`btn btn-${type} ${className}`} {...otherProps}>
      <i className={`glyphicon glyphicon-${icon}`} />
    </button>
  );
}
