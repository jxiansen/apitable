

import { Typography, useTheme } from '@apitable/components';

interface IErrorListProps {
  errors: string[];
}

export function ErrorList(props: IErrorListProps) {
  const { errors = [] } = props;
  const newErrors = Array.from(new Set(errors));
  const theme = useTheme();
  if (errors.length === 0) {
    return null;
  }
  const onlyOneError = newErrors.length === 1;

  return (
    <div style={{ marginTop: 4 }}>
      {onlyOneError ? (
        <Typography variant="body4" color={theme.color.fc10}>
          {newErrors[0]}
        </Typography>
      ) : (
        <ul
          style={{
            color: theme.color.fc10,
          }}
        >
          {newErrors
            .filter((elem) => !!elem)
            .map((error, index) => {
              return (
                <li key={index}>
                  <Typography variant="body4">{error}</Typography>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}
