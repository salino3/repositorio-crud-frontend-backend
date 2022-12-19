import {  useNavigate } from 'react-router-dom';

export const PageNotFound = () => {

  const navigate = useNavigate();
  
  return (
    <>
      <h3 className="textViolet PNFh3" onClick={() => navigate(-1)}>
        <u> Go Home</u>
      </h3>
      <h1 className="PNF">* Page Not Found *</h1>
      <h1 className="PNF">* Page Not Found *</h1>
      <h1 className="PNF">* Page Not Found *</h1>
    </>
  );
};
