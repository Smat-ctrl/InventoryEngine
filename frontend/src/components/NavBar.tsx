export default function NavBar() {
  return (
    <div className="w-screen flex-none flex flex-row justify-between bg-[#111827]">
      <div className="flex flex-row gap-2 mt-3">
        {/* Logo */}
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-3 ms-2 cursor-pointer"
        >
          <g filter="url(#filter0_dd_1_36)">
            <path
              d="M12 16C12 8.26801 18.268 2 26 2H38C45.732 2 52 8.26801 52 16V28C52 35.732 45.732 42 38 42H26C18.268 42 12 35.732 12 28V16Z"
              fill="#22D3EE"
              shape-rendering="crispEdges"
            />
            <path
              d="M31.1667 30.1083C31.42 30.2546 31.7074 30.3316 32 30.3316C32.2926 30.3316 32.58 30.2546 32.8333 30.1083L38.6667 26.775C38.9198 26.6289 39.13 26.4187 39.2763 26.1657C39.4225 25.9127 39.4997 25.6256 39.5 25.3333V18.6667C39.4997 18.3744 39.4225 18.0873 39.2763 17.8343C39.13 17.5813 38.9198 17.3711 38.6667 17.225L32.8333 13.8917C32.58 13.7454 32.2926 13.6684 32 13.6684C31.7074 13.6684 31.42 13.7454 31.1667 13.8917L25.3333 17.225C25.0802 17.3711 24.87 17.5813 24.7237 17.8343C24.5775 18.0873 24.5003 18.3744 24.5 18.6667V25.3333C24.5003 25.6256 24.5775 25.9127 24.7237 26.1657C24.87 26.4187 25.0802 26.6289 25.3333 26.775L31.1667 30.1083Z"
              stroke="#0B1220"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M32 30.3333V22"
              stroke="#0B1220"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.7417 17.8333L32 22L39.2583 17.8333"
              stroke="#0B1220"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M28.25 15.5583L35.75 19.85"
              stroke="#0B1220"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_1_36"
              x="0"
              y="0"
              width="64"
              height="64"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="4"
                operator="erode"
                in="SourceAlpha"
                result="effect1_dropShadow_1_36"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.133333 0 0 0 0 0.827451 0 0 0 0 0.933333 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_36"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="3"
                operator="erode"
                in="SourceAlpha"
                result="effect2_dropShadow_1_36"
              />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="7.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.133333 0 0 0 0 0.827451 0 0 0 0 0.933333 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_1_36"
                result="effect2_dropShadow_1_36"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1_36"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        {/* End Of Logo */}
        <div className="flex flex-col mt-2">
          <p className="text-lg font-bold text-white">Smart Inventory</p>
          <p className="text-white">Build smarter, buy better</p>
        </div>
      </div>
      <button className="rounded-full pt-1 flex flex-row gap-2 cursor-pointer bg-[#22D3EE] h-[40px] w-[110px] font-semibold me-10 mt-7">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="ms-5 mt-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6667 14V12.6667C10.6667 11.9594 10.3858 11.2811 9.88566 10.781C9.38556 10.281 8.70728 10 8.00004 10H4.00004C3.2928 10 2.61452 10.281 2.11442 10.781C1.61433 11.2811 1.33337 11.9594 1.33337 12.6667V14"
            stroke="#0B1220"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.00004 7.33333C7.4728 7.33333 8.66671 6.13943 8.66671 4.66667C8.66671 3.19391 7.4728 2 6.00004 2C4.52728 2 3.33337 3.19391 3.33337 4.66667C3.33337 6.13943 4.52728 7.33333 6.00004 7.33333Z"
            stroke="#0B1220"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.6666 5.33333V9.33333"
            stroke="#0B1220"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.6666 7.33333H10.6666"
            stroke="#0B1220"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="mt-1 me-3">Sign In</p>
      </button>
    </div>
  );
}
