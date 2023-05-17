const VoiceIcon = ({ color }) => {
  return (
    <>
      <svg
        width="11"
        height="17"
        viewBox="0 0 41 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.7834 56.4039H8.30716C7.22365 56.4039 6.14014 55.3204 6.14014 54.2369C6.14014 53.1534 7.22365 52.0698 8.30716 52.0698H31.7834C32.8669 52.0698 33.9504 53.1534 33.9504 54.2369C33.9504 55.3204 33.228 56.4039 31.7834 56.4039Z"
          fill={color || '#1877F1'}
        />
        <path
          d="M20.2256 56.4032C19.1421 56.4032 18.0586 55.3197 18.0586 54.2362V45.2069C18.0586 44.1234 19.1421 43.0399 20.2256 43.0399C21.3091 43.0399 22.3926 44.1234 22.3926 45.2069V54.2362C22.3926 55.3197 21.3091 56.4032 20.2256 56.4032Z"
          fill={color || '#1877F1'}
        />
        <path
          d="M20.2248 37.6221C13.3626 37.6221 8.30615 32.5657 8.30615 26.0646V12.34C8.30615 5.83892 13.3626 0.782516 19.8637 0.782516H20.2248C26.7259 0.782516 31.7823 5.83892 31.7823 12.34V26.0646C31.7823 32.2045 26.7259 37.6221 20.2248 37.6221Z"
          fill={color || '#1877F1'}
        />
        <path
          d="M20.2256 46.2901C14.4469 46.2901 9.39047 44.1231 5.77875 40.5114C1.80586 36.5385 0 31.4821 0 26.0645C0 24.981 1.08351 23.8974 2.16703 23.8974C3.25054 23.8974 4.33405 24.981 4.33405 26.0645C4.33405 30.3985 6.13993 34.3714 9.0293 37.2608C11.9187 40.1502 15.8916 41.956 20.2256 41.956C24.5597 41.956 28.5326 40.1502 31.422 37.2608C34.3113 34.3714 36.1172 30.3985 36.1172 26.0645C36.1172 24.981 37.2007 23.8974 38.2842 23.8974C39.3678 23.8974 40.4513 24.981 40.4513 26.0645C40.4513 31.4821 38.2842 36.5385 34.6725 40.5114C30.6996 44.1231 25.6432 46.2901 20.2256 46.2901Z"
          fill={color || '#1877F1'}
        />
      </svg>
    </>
  )
}

export default VoiceIcon