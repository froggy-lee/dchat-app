const ChatIcon = ({ color, dotColor }) => {
  return (
    <>
      <svg
        width="19"
        height="17"
        viewBox="0 0 49 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.6579 0C31.7978 0 37.5765 2.52818 41.9106 6.86225C46.2447 11.1963 48.7729 16.6139 48.7729 23.115C48.7729 29.2549 46.2447 35.0337 41.9106 39.3677C37.5765 43.7018 32.159 46.23 25.6579 46.23C21.3238 46.23 17.7121 45.1465 14.1003 42.9795L5.07104 44.7853C2.54284 45.1465 1.09815 45.1465 0.375807 44.063C-0.346537 42.9795 0.0146311 41.896 1.09815 39.7289L4.70987 32.8666C3.26518 29.9773 2.90401 26.7267 2.90401 23.4762C2.90401 17.3363 5.43221 11.5575 9.76628 7.22344C13.7392 2.52821 19.1568 0 25.6579 0Z"
          fill={color || '#0071E2'}
        />
        <path
          d="M10.4878 23.1141C10.4878 20.9471 11.9325 19.5024 13.7383 19.5024C15.9054 19.5024 16.9889 20.9471 16.9889 23.1141C16.9889 25.2812 15.5442 26.7259 13.7383 26.7259C11.9325 26.7259 10.4878 25.2812 10.4878 23.1141Z"
          fill={dotColor || 'white'}
        />
        <path
          d="M22.4062 23.1141C22.4062 20.9471 23.8509 19.5024 25.6568 19.5024C27.8238 19.5024 28.9073 20.9471 28.9073 23.1141C28.9073 25.2812 27.4627 26.7259 25.6568 26.7259C23.8509 26.7259 22.4062 25.2812 22.4062 23.1141Z"
          fill={dotColor || 'white'}
        />
        <path
          d="M34.3252 23.1141C34.3252 20.9471 35.7699 19.5024 37.5758 19.5024C39.7428 19.5024 40.8263 20.9471 40.8263 23.1141C40.8263 25.2812 39.3816 26.7259 37.5758 26.7259C35.7699 26.7259 34.3252 25.2812 34.3252 23.1141Z"
          fill={dotColor || 'white'}
        />
      </svg>
    </>
  )
}

export default ChatIcon
