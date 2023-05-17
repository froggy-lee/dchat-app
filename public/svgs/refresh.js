const RefreshIcon = ({ color }) => {
  return (
    <>
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.6164 8.45628C12.3391 8.45628 12.2005 8.73357 12.2005 8.87221C12.2005 11.9223 9.70492 14.4179 6.6548 14.4179C3.60468 14.4179 1.10912 11.9223 1.10912 8.87221C1.10912 6.09937 3.3274 3.74246 6.10024 3.32653V4.5743C6.10024 4.85158 6.23888 4.99023 6.37752 4.99023C6.51616 4.99023 6.51616 4.99023 6.6548 4.99023C6.6548 4.99023 6.79346 4.99023 6.9321 4.99023L10.1209 3.18788C10.2595 3.18788 10.3982 2.91061 10.3982 2.77197C10.3982 2.63333 10.3981 2.35604 10.1209 2.35604L6.9321 0.55369C6.9321 0.55369 6.79344 0.415039 6.6548 0.415039C6.6548 0.415039 6.51616 0.415048 6.37752 0.55369C6.23888 0.55369 6.10024 0.830978 6.10024 0.96962V2.21739C2.63419 2.49467 0 5.26751 0 8.73356C0 12.3383 2.91147 15.3884 6.6548 15.3884C10.2595 15.3884 13.171 12.4769 13.171 8.73356C13.0324 8.59492 12.8937 8.45628 12.6164 8.45628Z"
          fill={color || '#1877F1'}
        />
      </svg>
    </>
  )
}

export default RefreshIcon
