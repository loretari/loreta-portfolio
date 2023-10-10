import React from "react";
import './techstack.css'



const Techstack = () => {
    return (
        <section id= "techstack">
            <div className= "stacks">
                <span className= "stacksTitle">Tech Stack</span>
                <ul>
                    <li>
                        <a
                            href= "https://www.w3schools.com/html/"
                            target= "_blank"
                            rel= "noreferrer">
                            <img src= "https://skillicons.dev/icons?i=html" alt= "skill-icon"/>
                        </a>
                        <a
                            href= "https://www.w3schools.com/css/"
                            target= "_blank"
                            rel= "noreferrer">
                            <img src= "https://skillicons.dev/icons?i=css" alt= "skill-icon"/>
                        </a>
                        <a
                            href= "https://getbootstrap.com/"
                            target= "_blank"
                            rel= "noreferrer">
                            <img src= "https://skillicons.dev/icons?i=bootstrap" alt= "skill-icon"/>
                        </a>
                        <a
                            href= "https://www.figma.com/"
                            target= "_blank"
                            rel= "noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 256 256">
                                <rect width="48" height="48" fill="#242938" rx="60"/>
                                <g clip-path="url(#clip0_4_180)">
                                    <path fill="#0ACF83" d="M94.3467 228C112.747 228 127.68 213.067 127.68 194.667V161.333H94.3467C75.9467 161.333 61.0133 176.267 61.0133 194.667C61.0133 213.067 75.9467 228 94.3467 228Z"/>
                                    <path fill="#A259FF" d="M61.0133 128C61.0133 109.6 75.9467 94.6667 94.3467 94.6667H127.68V161.333H94.3467C75.9467 161.333 61.0133 146.4 61.0133 128Z"/>
                                    <path fill="#F24E1E" d="M61.0133 61.3333C61.0133 42.9333 75.9467 28 94.3467 28H127.68V94.6667H94.3467C75.9467 94.6667 61.0133 79.7333 61.0133 61.3333Z"/>
                                    <path fill="#FF7262" d="M127.68 28H161.013C179.413 28 194.347 42.9333 194.347 61.3333C194.347 79.7333 179.413 94.6667 161.013 94.6667H127.68V28Z"/>
                                    <path fill="#1ABCFE" d="M194.347 128C194.347 146.4 179.413 161.333 161.013 161.333C142.613 161.333 127.68 146.4 127.68 128C127.68 109.6 142.613 94.6667 161.013 94.6667C179.413 94.6667 194.347 109.6 194.347 128Z"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4_180">
                                        <rect width="133.36" height="200" fill="#fff" transform="translate(61 28)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>

                    </li>
                    <li>
                        <a
                            href= "https://www.javascript.com/"
                            target= "_blank"
                            rel= "noreferrer">
                            <img src="https://skillicons.dev/icons?i=js" alt="skill-icon" />
                        </a>
                        <a
                            href= "https://www.typescriptlang.org/"
                            target= "_blank"
                            rel= "noreferrer">
                            <img src="https://skillicons.dev/icons?i=ts" alt="skill-icon" />
                        </a>
                        <a
                            href= "https://www.eclipse.org/"
                            target= "_blank"
                            rel= "noreferrer">
                            <img src="https://skillicons.dev/icons?i=eclipse" alt="skill-icon" />
                        </a>

                    </li>
                    <li>
                        <a
                            href= "https://react.dev/"
                            target= "_blank"
                            rel= "noreferrer">
                            <img src="https://skillicons.dev/icons?i=react" alt="skill-icon" />
                        </a>
                        <a
                            href= "https://vuejs.org/"
                            target= "_blank"
                            rel= "noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 256 256">
                                <rect width="48" height="48" fill="#242938" rx="60"/>
                                <path fill="#41B883" d="M182 50H218L128 205.25L38 50H73.55H106.85L128 86L148.7 50H182Z"/>
                                <path fill="#41B883" d="M38 50L128 205.25L218 50H182L128 143.15L73.55 50H38Z"/>
                                <path fill="#35495E" d="M73.55 50L128 143.6L182 50H148.7L128 86L106.85 50H73.55Z"/>
                            </svg>
                        </a>
                        <a
                            href= "https://vitejs.dev/"
                            target= "_blank"
                            rel= "noreferrer">
                            <svg width="48" height="48" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="60" fill="#242938"/>
                                <path d="M227.088 57.6016L133.256 225.389C131.318 228.854 126.341 228.874 124.375 225.427L28.6823 57.6177C26.54 53.861 29.7524 49.3105 34.0096 50.0715L127.942 66.8613C128.541 66.9684 129.155 66.9674 129.754 66.8582L221.722 50.0955C225.965 49.3222 229.192 53.8374 227.088 57.6016Z" fill="url(#paint0_linear_307_184)"/>
                                <path d="M172.687 28.0492L103.249 41.6554C102.107 41.879 101.262 42.8462 101.194 44.007L96.9221 116.148C96.8216 117.847 98.3821 119.166 100.04 118.783L119.373 114.322C121.182 113.905 122.816 115.498 122.445 117.317L116.701 145.443C116.314 147.336 118.092 148.954 119.94 148.393L131.881 144.765C133.732 144.203 135.511 145.826 135.119 147.721L125.991 191.9C125.42 194.664 129.096 196.171 130.629 193.801L131.653 192.219L188.235 79.2992C189.183 77.4085 187.549 75.2526 185.472 75.6534L165.573 79.494C163.703 79.8545 162.112 78.113 162.639 76.2834L175.628 31.2582C176.156 29.4255 174.559 27.6825 172.687 28.0492Z" fill="url(#paint1_linear_307_184)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_307_184" x1="26.3459" y1="44.075" x2="143.127" y2="202.673" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#41D1FF"/>
                                        <stop offset="1" stop-color="#BD34FE"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_307_184" x1="122.551" y1="31.7433" x2="143.676" y2="176.66" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFEA83"/>
                                        <stop offset="0.0833333" stop-color="#FFDD35"/>
                                        <stop offset="1" stop-color="#FFA800"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                        <a
                            href= "https://redux.js.org/"
                            target= "_blank"
                            rel= "noreferrer">
                            <svg width="48" height="48" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="60" fill="#242938"/>
                                <path d="M166.579 165.599C173.96 164.835 179.559 158.472 179.304 150.837C179.05 143.202 172.687 137.094 165.052 137.094H164.543C156.653 137.348 150.545 143.965 150.799 151.855C151.054 155.673 152.581 158.981 154.871 161.272C146.218 178.324 132.984 190.795 113.132 201.23C99.6432 208.356 85.6452 210.901 71.6472 209.12C60.1944 207.593 51.2866 202.502 45.6874 194.104C37.5431 181.633 36.7796 168.144 43.6513 154.655C48.487 144.983 56.1222 137.857 60.9579 134.294C59.9399 130.986 58.4128 125.386 57.6493 121.314C20.7456 148.038 24.5632 184.178 35.7615 201.23C44.1603 213.955 61.2124 221.845 80.046 221.845C85.1362 221.845 90.2264 221.336 95.3165 220.063C127.894 213.701 152.581 194.358 166.579 165.599V165.599Z" fill="white"/>
                                <path d="M211.372 134.04C192.03 111.388 163.525 98.9175 130.948 98.9175H126.876C124.585 94.3363 119.749 91.2822 114.405 91.2822H113.896C106.006 91.5367 99.8977 98.154 100.152 106.044C100.407 113.679 106.769 119.787 114.405 119.787H114.914C120.513 119.533 125.349 115.97 127.385 111.134H131.966C151.308 111.134 169.633 116.733 186.176 127.677C198.901 136.076 208.064 147.02 213.154 160.254C217.481 170.943 217.226 181.378 212.645 190.286C205.519 203.775 193.557 211.156 177.777 211.156C167.597 211.156 157.926 208.102 152.835 205.811C150.036 208.356 144.946 212.428 141.383 214.973C152.326 220.063 163.525 222.863 174.214 222.863C198.647 222.863 216.717 209.374 223.589 195.885C230.97 181.124 230.461 155.673 211.372 134.04Z" fill="white"/>
                                <path d="M82.0822 169.926C82.3367 177.561 88.6994 183.669 96.3347 183.669H96.8437C104.733 183.414 110.842 176.797 110.587 168.907C110.333 161.272 103.97 155.164 96.3347 155.164H95.8256C95.3166 155.164 94.5531 155.164 94.0441 155.419C83.6092 138.112 79.2826 119.278 80.8096 98.9177C81.8277 83.6472 86.9178 70.4127 95.8256 59.4689C103.206 50.0521 117.459 45.4709 127.13 45.2164C154.108 44.7074 165.561 78.3025 166.324 91.7915C169.633 92.555 175.232 94.3365 179.05 95.6091C175.996 54.3787 150.545 33 126.112 33C103.206 33 82.0822 49.543 73.6834 73.9759C61.976 106.553 69.6113 137.857 83.8637 162.545C82.5912 164.326 81.8277 167.126 82.0822 169.926V169.926Z" fill="white"/>
                            </svg>
                        </a>
                        <a
                            href= "https://nodejs.org/en"
                            target= "_blank"
                            rel= "noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 256 256">
                                <rect width="48" height="48" fill="#242938" rx="60"/>
                                <path fill="#81CD39" d="M119.878 31.1164C124.797 28.3008 131.203 28.2883 136.117 31.1164C160.839 45.0855 185.569 59.0332 210.287 73.0108C214.937 75.6296 218.046 80.8038 217.999 86.1608V170.206C218.034 175.785 214.617 181.083 209.712 183.642C185.071 197.535 160.442 211.444 135.805 225.337C130.786 228.207 124.251 227.986 119.387 224.88C112 220.598 104.6 216.336 97.2121 212.058C95.7022 211.158 94.0004 210.442 92.9345 208.978C93.8766 207.708 95.5618 207.55 96.9309 206.995C100.014 206.014 102.847 204.44 105.679 202.913C106.396 202.423 107.27 202.611 107.957 203.049C114.274 206.671 120.536 210.399 126.874 213.986C128.226 214.767 129.595 213.73 130.751 213.086C154.931 199.419 179.141 185.805 203.318 172.134C204.214 171.703 204.709 170.752 204.636 169.771C204.653 142.046 204.64 114.317 204.645 86.5918C204.747 85.4785 204.103 84.455 203.096 83.999C178.541 70.1702 153.997 56.3205 129.446 42.4882C128.575 41.8893 127.426 41.8878 126.554 42.4837C102.002 56.3205 77.4638 70.1832 52.9124 84.011C51.9092 84.4675 51.236 85.4745 51.3554 86.5918C51.3596 114.317 51.3554 142.046 51.3554 169.775C51.2682 170.756 51.801 171.687 52.6906 172.109C59.2422 175.824 65.8024 179.513 72.3582 183.216C76.0516 185.203 80.5863 186.385 84.6555 184.862C88.2463 183.574 90.7633 179.909 90.6948 176.097C90.7288 148.534 90.6778 120.967 90.7203 93.4078C90.6309 92.1841 91.7912 91.1731 92.981 91.2885C96.1292 91.267 99.281 91.2461 102.429 91.297C103.743 91.267 104.647 92.5847 104.485 93.8174C104.472 121.555 104.519 149.293 104.464 177.03C104.472 184.423 101.435 192.467 94.5973 196.084C86.1737 200.447 75.7619 199.522 67.4399 195.338C60.2355 191.742 53.3603 187.498 46.2838 183.646C41.3661 181.101 37.966 175.782 38.0006 170.207V86.1608C37.949 80.6929 41.1825 75.4248 45.9764 72.8445C70.6133 58.9408 95.2461 45.0261 119.878 31.1164Z"/><path fill="#81CD39" d="M141.372 89.3351C152.117 88.6433 163.62 88.9255 173.289 94.2185C180.776 98.2754 184.926 106.789 185.058 115.106C184.849 116.227 183.676 116.846 182.605 116.769C179.488 116.765 176.369 116.812 173.252 116.748C171.929 116.799 171.161 115.58 170.995 114.411C170.099 110.431 167.928 106.49 164.183 104.57C158.433 101.692 151.767 101.837 145.496 101.897C140.92 102.139 135.998 102.536 132.12 105.227C129.143 107.266 128.239 111.382 129.301 114.697C130.303 117.077 133.05 117.845 135.298 118.553C148.248 121.94 161.97 121.602 174.671 126.059C179.931 127.876 185.075 131.409 186.875 136.915C189.23 144.295 188.198 153.115 182.947 159.039C178.689 163.914 172.488 166.568 166.303 168.009C158.075 169.844 149.536 169.891 141.18 169.076C133.323 168.18 125.146 166.116 119.081 160.763C113.894 156.259 111.361 149.241 111.612 142.469C111.672 141.325 112.811 140.527 113.907 140.621C117.046 140.596 120.186 140.587 123.325 140.626C124.579 140.536 125.509 141.62 125.573 142.802C126.152 146.593 127.577 150.573 130.883 152.82C137.264 156.937 145.271 156.655 152.577 156.77C158.629 156.502 165.424 156.421 170.364 152.42C172.97 150.138 173.742 146.32 173.038 143.036C172.275 140.263 169.374 138.971 166.883 138.126C154.1 134.083 140.224 135.55 127.565 130.977C122.425 129.161 117.455 125.727 115.481 120.447C112.726 112.974 113.988 103.73 119.789 98.0061C125.445 92.312 133.609 90.1192 141.372 89.3346V89.3351"/>
                            </svg>
                        </a>
                        <a
                            href= "https://www.mysql.com/"
                            target= "_blank"
                            rel= "noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 256 256">
                                <rect width="50" height="48" fill="#242938" rx="60"/>
                                <g clip-path="url(#clip0_7_150)">
                                    <path fill="#00678C" fill-rule="evenodd" d="M203.801 178.21C194.011 177.938 186.416 178.941 180.051 181.619C178.218 182.355 175.277 182.355 175.035 184.662C176.015 185.63 176.133 187.214 176.992 188.556C178.459 190.991 181.033 194.271 183.357 195.973L191.191 201.571C195.965 204.488 201.351 206.193 206.002 209.113C208.696 210.817 211.388 213.007 214.082 214.834C215.454 215.807 216.285 217.392 218 217.997V217.629C217.144 216.538 216.897 214.957 216.044 213.735L212.367 210.209C208.82 205.465 204.41 201.325 199.636 197.922C195.718 195.245 187.152 191.596 185.56 187.097L185.319 186.824C188.008 186.552 191.191 185.605 193.764 184.875C197.929 183.784 201.721 184.024 206.002 182.93L211.882 181.226V180.135C209.678 177.946 208.087 175.025 205.763 172.959C199.521 167.606 192.661 162.373 185.56 157.994C181.766 155.562 176.868 153.977 172.829 151.913C171.356 151.182 168.911 150.817 168.055 149.601C165.846 146.929 164.625 143.397 163.034 140.232L152.997 119.064C150.794 114.319 149.444 109.574 146.755 105.195C134.144 84.5124 120.431 71.9828 99.375 59.6932C94.8477 57.1382 89.4616 56.0393 83.7353 54.7032L74.5546 54.2124C72.5928 53.3616 70.6364 51.0493 68.9216 49.9531C61.9441 45.5739 43.9475 36.0847 38.8029 48.5897C35.4966 56.4974 43.7006 64.2824 46.4855 68.299C48.5708 71.0966 51.2597 74.2597 52.7332 77.4228C53.5563 79.4897 53.8307 81.682 54.6895 83.8717C56.6458 89.2243 58.4842 95.1878 61.0551 100.178C62.427 102.733 63.8675 105.413 65.5824 107.723C66.5619 109.086 68.2768 109.67 68.6417 111.859C66.9268 114.294 66.8089 117.94 65.8293 120.986C61.42 134.734 63.1349 151.766 69.377 161.888C71.3389 164.928 75.9622 171.622 82.2345 169.065C87.744 166.875 86.5148 159.941 88.1062 153.857C88.4766 152.399 88.2297 151.425 88.9623 150.449V150.722L93.9834 160.819C97.7781 166.78 104.391 172.986 109.897 177.125C112.833 179.315 115.16 183.089 118.831 184.425V184.057H118.59C117.854 182.966 116.751 182.475 115.772 181.624C113.569 179.435 111.121 176.757 109.406 174.325C104.267 167.513 99.7399 159.968 95.6983 152.183C93.7365 148.412 92.0216 144.275 90.4357 140.504C89.6949 139.043 89.6949 136.85 88.4739 136.125C86.6355 138.797 83.9466 141.115 82.5939 144.398C80.2672 149.628 80.0257 156.077 79.1697 162.769C78.6758 162.891 78.8953 162.769 78.6758 163.041C74.7631 162.071 73.4132 158.051 71.9453 154.648C68.274 146.01 67.6594 132.141 70.8422 122.164C71.6983 119.609 75.375 111.579 73.9071 109.146C73.1662 106.834 70.7242 105.498 69.3743 103.671C67.7829 101.359 66.0735 98.4409 64.9705 95.8859C62.0346 89.0689 60.5667 81.5293 57.3812 74.7151C55.9077 71.552 53.3396 68.2662 51.257 65.3486C48.9303 62.0628 46.3648 59.7505 44.5265 55.8593C43.9146 54.4959 43.0585 52.3309 44.0381 50.8693C44.2795 49.8959 44.7734 49.5059 45.7475 49.2878C47.3389 47.9244 51.8716 49.6532 53.463 50.3785C57.9903 52.2054 61.7849 53.907 65.5796 56.4592C67.2945 57.6754 69.1329 59.9877 71.3361 60.5985H73.9098C77.8279 61.4493 82.2317 60.8712 85.9002 61.9619C92.3893 64.0343 98.2637 67.0719 103.532 70.3604C119.567 80.4577 132.792 94.8143 141.725 111.971C143.193 114.769 143.805 117.324 145.155 120.244C147.729 126.208 150.912 132.289 153.477 138.132C156.051 143.85 158.498 149.694 162.17 154.438C164.008 156.993 171.35 158.329 174.654 159.668C177.104 160.759 180.896 161.741 183.105 163.077C187.264 165.632 191.427 168.552 195.342 171.35C197.298 172.806 203.423 175.849 203.787 178.276L203.801 178.21ZM78.9584 72.4873C77.267 72.4724 75.5809 72.6769 73.9427 73.0954V73.3681H74.1842C75.1637 75.315 76.8786 76.6538 78.1023 78.3581L80.9202 84.1989L81.1616 83.9262C82.8765 82.71 83.7353 80.7631 83.7353 77.8454C83 76.9947 82.8793 76.1412 82.2674 75.2904C81.5321 74.0743 79.9407 73.4635 78.9584 72.4928V72.4873Z" clip-rule="evenodd"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_7_150">
                                        <rect width="180" height="180" fill="#fff" transform="translate(38 38)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>


                    </li>
                    <li>
                        <a
                            href= "https://sass-lang.com/"
                            target= "_blank"
                            rel= "noreferrer">
                            <img src="https://skillicons.dev/icons?i=scss" alt="skill-icon"/>
                        </a>
                        <a
                            href= "https://www.netlify.com/"
                            target= "_blank"
                            rel= "noreferrer">
                            <svg width="48" height="48" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="60" fill="#242938"/>
                                <path d="M172.787 97.4052L172.714 97.3739C172.673 97.3583 172.631 97.3426 172.594 97.3061C172.534 97.2418 172.49 97.1647 172.465 97.0806C172.44 96.9965 172.434 96.9077 172.448 96.821L176.48 72.1699L195.389 91.0834L175.724 99.4499C175.669 99.4719 175.611 99.4826 175.552 99.4812H175.474C175.448 99.4656 175.421 99.4447 175.369 99.3925C174.637 98.5777 173.762 97.9041 172.787 97.4052V97.4052ZM200.213 95.903L220.431 116.12C224.63 120.325 226.732 122.421 227.499 124.852C227.613 125.212 227.707 125.572 227.78 125.942L179.464 105.48C179.438 105.469 179.412 105.459 179.386 105.448C179.193 105.37 178.968 105.281 178.968 105.083C178.968 104.885 179.198 104.791 179.391 104.713L179.453 104.687L200.213 95.903V95.903ZM226.956 132.431C225.913 134.392 223.879 136.427 220.436 139.874L197.642 162.663L168.161 156.524L168.004 156.493C167.743 156.451 167.467 156.404 167.467 156.169C167.355 154.953 166.994 153.773 166.406 152.702C165.818 151.632 165.016 150.694 164.05 149.947C163.93 149.827 163.962 149.639 163.998 149.467C163.998 149.441 163.998 149.415 164.009 149.394L169.553 115.354L169.574 115.239C169.606 114.978 169.652 114.676 169.887 114.676C171.075 114.528 172.222 114.145 173.261 113.549C174.3 112.954 175.21 112.158 175.938 111.207C175.985 111.155 176.016 111.097 176.079 111.066C176.246 110.988 176.444 111.066 176.616 111.139L226.951 132.431H226.956ZM192.4 167.905L154.917 205.388L161.333 165.955L161.343 165.902C161.349 165.85 161.359 165.798 161.375 165.751C161.427 165.626 161.562 165.574 161.693 165.522L161.755 165.496C163.16 164.896 164.403 163.972 165.381 162.799C165.506 162.653 165.657 162.512 165.85 162.486C165.9 162.478 165.951 162.478 166.001 162.486L192.394 167.911L192.4 167.905ZM146.983 213.322L142.758 217.547L96.0487 150.04C96.0318 150.016 96.0144 149.991 95.9965 149.967C95.9235 149.868 95.8453 149.769 95.8609 149.654C95.8661 149.571 95.9183 149.498 95.9757 149.435L96.0278 149.368C96.1687 149.159 96.2886 148.95 96.419 148.726L96.5234 148.543L96.539 148.528C96.612 148.403 96.6798 148.283 96.805 148.215C96.9146 148.163 97.0658 148.184 97.1858 148.21L148.934 158.882C149.079 158.904 149.215 158.963 149.331 159.054C149.399 159.122 149.414 159.195 149.43 159.278C149.791 160.644 150.463 161.908 151.393 162.971C152.323 164.034 153.486 164.868 154.792 165.407C154.938 165.48 154.875 165.642 154.808 165.814C154.774 165.889 154.748 165.968 154.729 166.049C154.077 170.013 148.486 204.115 146.983 213.322ZM138.158 222.142C135.044 225.225 133.208 226.857 131.132 227.515C129.085 228.162 126.888 228.162 124.841 227.515C122.411 226.743 120.309 224.646 116.11 220.442L69.2016 173.534L81.4542 154.531C81.5115 154.438 81.5689 154.354 81.6628 154.286C81.7932 154.192 81.981 154.234 82.1375 154.286C84.9498 155.135 87.9692 154.982 90.6814 153.853C90.8222 153.801 90.963 153.765 91.0726 153.864C91.1273 153.914 91.1763 153.97 91.2186 154.031L138.158 222.147V222.142ZM64.6793 169.011L53.9186 158.251L75.1688 149.185C75.2231 149.161 75.2817 149.149 75.3409 149.149C75.5183 149.149 75.6226 149.326 75.7165 149.488C75.9301 149.816 76.1563 150.136 76.3946 150.447L76.4624 150.531C76.525 150.619 76.4833 150.708 76.4207 150.792L64.6845 169.011H64.6793ZM49.1563 153.488L35.5424 139.874C33.2265 137.558 31.5469 135.879 30.3785 134.434L71.7732 143.02C71.8252 143.029 71.8773 143.038 71.9296 143.046C72.1852 143.087 72.4669 143.134 72.4669 143.374C72.4669 143.635 72.1591 143.755 71.8983 143.854L71.7784 143.906L49.1563 153.488ZM28 127.434C28.0472 126.557 28.2049 125.69 28.4694 124.852C29.2414 122.421 31.3383 120.325 35.5424 116.12L52.9641 98.6988C60.9855 110.34 69.0287 121.967 77.0935 133.579C77.2344 133.766 77.3908 133.975 77.2292 134.131C76.4676 134.971 75.7061 135.889 75.1688 136.886C75.1105 137.014 75.0208 137.125 74.908 137.209C74.8402 137.251 74.7672 137.235 74.6889 137.219H74.6785L28 127.429V127.434ZM57.6272 94.0356L81.0525 70.6103C83.2537 71.5753 91.2656 74.9605 98.4324 77.9858C103.857 80.2809 108.802 82.3673 110.356 83.0454C110.513 83.108 110.654 83.1706 110.721 83.3271C110.763 83.421 110.742 83.5409 110.721 83.64C110.351 85.331 110.406 87.0875 110.882 88.7518C111.358 90.4162 112.24 91.9361 113.449 93.175C113.606 93.3315 113.449 93.5558 113.314 93.7488L113.241 93.8583L89.4556 130.699C89.393 130.804 89.3356 130.892 89.2313 130.96C89.1061 131.038 88.9288 131.002 88.7827 130.965C87.8576 130.723 86.9066 130.593 85.9504 130.579C85.095 130.579 84.1665 130.736 83.2276 130.908H83.2224C83.1181 130.924 83.0242 130.944 82.9407 130.882C82.8486 130.807 82.7693 130.717 82.706 130.616L57.6272 94.0356V94.0356ZM85.7835 65.8794L116.11 35.5532C120.309 31.3543 122.411 29.2522 124.841 28.4854C126.888 27.8382 129.085 27.8382 131.132 28.4854C133.563 29.2522 135.665 31.3543 139.864 35.5532L146.436 42.1254L124.867 75.5291C124.814 75.6263 124.741 75.7115 124.654 75.7794C124.523 75.8681 124.341 75.8316 124.184 75.7794C122.484 75.2634 120.683 75.1694 118.938 75.5057C117.193 75.842 115.556 76.5983 114.169 77.7094C114.028 77.8554 113.82 77.772 113.642 77.6937C110.826 76.468 88.9183 67.2095 85.7835 65.8794V65.8794ZM151.016 46.7051L170.93 66.62L166.132 96.3411V96.4194C166.127 96.4871 166.113 96.5539 166.09 96.6176C166.038 96.7219 165.933 96.7428 165.829 96.7741C164.803 97.0849 163.837 97.5662 162.971 98.1981C162.933 98.2246 162.899 98.2543 162.866 98.2867C162.809 98.3493 162.752 98.4067 162.658 98.4171C162.581 98.4195 162.505 98.4071 162.433 98.3806L132.086 85.4865L132.029 85.4604C131.836 85.3822 131.607 85.2883 131.607 85.0901C131.428 83.399 130.876 81.7687 129.99 80.3174C129.844 80.0775 129.682 79.8271 129.807 79.5819L151.016 46.7051V46.7051ZM130.506 91.5945L158.954 103.644C159.111 103.717 159.283 103.784 159.351 103.946C159.378 104.043 159.378 104.146 159.351 104.243C159.267 104.661 159.194 105.135 159.194 105.615V106.413C159.194 106.612 158.991 106.695 158.803 106.773L158.746 106.794C154.239 108.719 95.4749 133.777 95.3862 133.777C95.2976 133.777 95.2037 133.777 95.115 133.688C94.9585 133.532 95.115 133.313 95.2558 133.114C95.2807 133.08 95.3051 133.045 95.3289 133.01L118.707 96.8106L118.749 96.748C118.885 96.5289 119.041 96.2838 119.291 96.2838L119.526 96.3203C120.058 96.3933 120.528 96.4611 121.002 96.4611C124.549 96.4611 127.835 94.7346 129.817 91.7823C129.865 91.7035 129.925 91.633 129.995 91.5737C130.136 91.4693 130.344 91.5215 130.506 91.5945V91.5945ZM97.9265 139.504L161.98 112.188C161.98 112.188 162.074 112.188 162.162 112.276C162.512 112.626 162.809 112.86 163.096 113.079L163.237 113.168C163.367 113.241 163.498 113.325 163.508 113.46C163.508 113.512 163.508 113.544 163.498 113.591L158.01 147.297L157.989 147.432C157.953 147.693 157.916 147.991 157.671 147.991C156.208 148.089 154.791 148.543 153.544 149.313C152.296 150.083 151.254 151.145 150.51 152.409L150.483 152.45C150.41 152.57 150.343 152.685 150.223 152.748C150.113 152.8 149.972 152.779 149.858 152.753L98.7767 142.216C98.7245 142.206 97.9838 139.509 97.9265 139.504V139.504Z" fill="url(#paint0_radial_267_114)"/>
                                <defs>
                                    <radialGradient id="paint0_radial_267_114" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.2925 125.178) rotate(90) scale(199.78 230.653)">
                                        <stop stop-color="#20C6B7"/>
                                        <stop offset="1" stop-color="#4D9ABF"/>
                                    </radialGradient>
                                </defs>
                            </svg>
                        </a>
                        <a
                            href= "https://code.visualstudio.com/"
                            target= "_blank"
                            rel= "noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 256 256">
                                <rect width="48" height="48" fill="#242938" rx="60"/>
                                <path fill="#2489CA" d="M33.7158 100.208C33.7158 100.208 28.9814 96.795 34.6627 92.2381L47.8994 80.402C47.8994 80.402 51.6869 76.4172 55.6915 79.8891L177.84 172.368V216.714C177.84 216.714 177.781 223.678 168.844 222.908L33.7158 100.208Z"/>
                                <path fill="#1070B3" d="M65.1997 128.792L33.7157 157.415C33.7157 157.415 30.4805 159.822 33.7157 164.123L48.3333 177.418C48.3333 177.418 51.8052 181.147 56.9341 176.905L90.3119 151.596L65.1997 128.792Z"/>
                                <path fill="#0877B9" d="M120.474 129.029L178.215 84.9391L177.84 40.83C177.84 40.83 175.374 31.2033 167.148 36.2139L90.312 106.145L120.474 129.029Z"/>
                                <path fill="#3C99D4" d="M168.844 222.968C172.198 226.4 176.262 225.276 176.262 225.276L221.259 203.103C227.019 199.177 226.21 194.305 226.21 194.305V61.8982C226.21 56.0788 220.252 54.0667 220.252 54.0667L181.253 35.267C172.731 30 167.148 36.2139 167.148 36.2139C167.148 36.2139 174.328 31.0455 177.84 40.83V215.905C177.84 217.109 177.583 218.292 177.071 219.358C176.045 221.429 173.816 223.362 168.47 222.553L168.844 222.968Z"/>
                            </svg>
                        </a>

                    </li>
                    <li>
                        <a
                            href= "https://firebase.google.com/"
                            target= "_blank"
                            rel= "noreferrer">
                            <img src="https://skillicons.dev/icons?i=firebase" alt="skill-icon"/>
                        </a>
                        <a
                            href= "https://github.com/"
                            target= "_blank"
                            rel= "noreferrer">
                            <svg width="48" height="48" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="60" fill="#242938"/>
                                <path d="M128.001 30C72.7791 30 28 74.7708 28 130.001C28 174.184 56.6533 211.668 96.3867 224.891C101.384 225.817 103.219 222.722 103.219 220.081C103.219 217.696 103.126 209.819 103.083 201.463C75.2631 207.512 69.3927 189.664 69.3927 189.664C64.8437 178.105 58.2894 175.032 58.2894 175.032C49.2163 168.825 58.9733 168.953 58.9733 168.953C69.0151 169.658 74.3026 179.258 74.3026 179.258C83.2217 194.546 97.6965 190.126 103.403 187.571C104.301 181.107 106.892 176.696 109.752 174.199C87.5405 171.67 64.1913 163.095 64.1913 124.778C64.1913 113.86 68.0977 104.939 74.4947 97.9362C73.4564 95.4175 70.0335 85.2465 75.4635 71.4722C75.4635 71.4722 83.8609 68.7845 102.971 81.7226C110.948 79.5069 119.502 78.3958 128.001 78.3577C136.499 78.3958 145.061 79.5069 153.052 81.7226C172.139 68.7845 180.525 71.4722 180.525 71.4722C185.968 85.2465 182.544 95.4175 181.505 97.9362C187.917 104.939 191.797 113.86 191.797 124.778C191.797 163.187 168.403 171.644 146.135 174.119C149.722 177.223 152.918 183.308 152.918 192.638C152.918 206.018 152.802 216.787 152.802 220.081C152.802 222.742 154.602 225.86 159.671 224.878C199.383 211.64 228 174.169 228 130.001C228 74.7708 183.227 30 128.001 30ZM65.4536 172.453C65.2333 172.95 64.4517 173.099 63.7396 172.758C63.0143 172.432 62.6069 171.754 62.8421 171.256C63.0574 170.744 63.8406 170.602 64.5643 170.945C65.2913 171.271 65.7053 171.955 65.4536 172.453ZM70.3725 176.842C69.8956 177.285 68.9633 177.079 68.3307 176.38C67.6766 175.683 67.554 174.751 68.0376 174.302C68.5294 173.86 69.4336 174.067 70.0893 174.764C70.7434 175.47 70.8709 176.395 70.3725 176.842ZM73.7471 182.458C73.1344 182.884 72.1325 182.485 71.5132 181.595C70.9004 180.706 70.9004 179.64 71.5264 179.212C72.1474 178.785 73.1344 179.169 73.762 180.052C74.373 180.956 74.373 182.023 73.7471 182.458ZM79.4542 188.962C78.9061 189.566 77.7386 189.404 76.8841 188.579C76.0098 187.773 75.7663 186.629 76.3161 186.024C76.8709 185.418 78.045 185.589 78.9061 186.407C79.7738 187.211 80.0387 188.364 79.4542 188.962ZM86.8301 191.157C86.5883 191.941 85.4639 192.297 84.3312 191.964C83.2002 191.621 82.46 190.704 82.6885 189.912C82.9237 189.124 84.053 188.753 85.194 189.109C86.3234 189.45 87.0652 190.361 86.8301 191.157ZM95.2242 192.089C95.2523 192.913 94.2919 193.597 93.1029 193.612C91.9073 193.639 90.9402 192.971 90.9269 192.16C90.9269 191.327 91.8659 190.65 93.0615 190.63C94.2505 190.607 95.2242 191.269 95.2242 192.089ZM103.47 191.773C103.613 192.577 102.787 193.404 101.606 193.624C100.445 193.836 99.3702 193.339 99.2229 192.541C99.0788 191.716 99.92 190.89 101.079 190.676C102.262 190.471 103.32 190.955 103.47 191.773Z" fill="white"/>
                            </svg>
                        </a>

                    </li>
                </ul>

            </div>

        </section>
    )
}

export  default Techstack;