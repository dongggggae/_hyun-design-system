// import React, { useRef, useState, useCallback } from 'react';

// import styled from '@emotion/styled';
// import PropTypes from 'prop-types';

// import InputAddon from './InputAddon';

// const StyledInput = styled.div`
//   // .input-wrap__addon {
//   //   visibility: ${(props) => (props.hasValue ? 'visible' : 'hidden')};
//   // }
// `;

// const Input = React.memo(({ label, field, clear, placeholder }) => {
//   const formInput = useRef();
//   const [value, setValue] = useState('');
//   const [type, setType] = useState(field === 'password' ? 'password' : 'text');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   const handleClear = useCallback(() => {
//     formInput.current.value = '';
//     setValue('');
//   }, []);

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//     setType(type === 'text' ? 'password' : 'text');
//   };

//   return (
//     <React.Fragment>
//       {label && (
//         <div className="form-wrap">
//           <label className="form__label">{label}</label>
//           <StyledInput className="input-wrap" hasValue={value.length > 0}>
//             <input type={type} className="form__control" placeholder={placeholder} ref={formInput} onChange={handleChange} />
//             <InputAddon field={field} clear={clear} handleClear={handleClear} showPassword={showPassword} handleTogglePassword={handleTogglePassword} value={value} />
//           </StyledInput>
//         </div>
//       )}
//       {!label && (
//         <StyledInput className="input-wrap" hasValue={value.length > 0}>
//           <input type={type} className="form__control" placeholder={placeholder} ref={formInput} onChange={handleChange} />
//           <InputAddon field={field} clear={clear} handleClear={handleClear} showPassword={showPassword} handleTogglePassword={handleTogglePassword} value={value} />
//         </StyledInput>
//       )}
//     </React.Fragment>
//   );
// });

// Input.defaultProps = {
//   clear: false,
//   field: 'text',
// };

// Input.propTypes = {
//   label: PropTypes.string,
//   placeholder: PropTypes.string,
//   field: PropTypes.oneOf(['text', 'password', 'search']),
//   clear: PropTypes.bool,
// };

// Input.displayName = 'Input';

// export default Input;
