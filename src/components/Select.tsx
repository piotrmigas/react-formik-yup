import { Select, FormHelperText, FormControl, MenuItem, InputLabel } from '@material-ui/core';
import { useField, useFormikContext } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: { marginTop: 8 },
  error: {
    color: 'red',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
  },
}));

type Props = {
  label: string;
  name: string;
  options: { [key: string]: string };
};

const SelectWrapper = ({ name, options, label }: Props) => {
  const classes = useStyles();

  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  return (
    <FormControl variant='filled' fullWidth className={classes.root}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} onChange={(e) => setFieldValue(name, e.target.value)}>
        {Object.keys(options).map((item, pos) => {
          return (
            <MenuItem key={pos} value={item}>
              {options[item]}
            </MenuItem>
          );
        })}
      </Select>
      {meta.touched && meta.error ? <FormHelperText className={classes.error}>{meta.error}</FormHelperText> : null}
    </FormControl>
  );
};

export default SelectWrapper;
