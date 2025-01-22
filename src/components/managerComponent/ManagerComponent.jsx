import "./managerComponent.css"

const ManagerComponent = () => {
    return (
        <>
            <div style={{
                display: "flex",
                gap: "4%",
                justifyContent: "center",
                color: "white",
                fontFamily: "Montserrat",
                paddingTop: "2rem"
            }}>
                <div style={{minHeight: "50vh", backgroundColor: "#0F0F0F", width: "30%"}}>
                    <div className="div-card-manager" style={{marginBottom: "5rem"}}>
                        <div className="div-inner-left-manager-first ">2025</div>
                        <div className="div-inner-right-manager-first">Manage your expenses and incomes in 2025.</div>
                    </div>
                    <span style={{color: "white", backgroundColor: "transparent", fontWeight: "500"}}>Select a period (quarter or month)</span>
                    <div style={{display: "flex", marginTop: "1.5rem", gap: "0.25rem", fontWeight: "500"}}>
                        <div style={{display: "flex", flexDirection: "column", width: "25%", gap: "0.25rem"}}>
                            <div style={{textAlign: "center", padding: "0.25rem 0", backgroundColor: "#2C4370"}}>Q1
                            </div>
                            <div style={{display: "flex"}}>
                                <div style={{
                                    width: "33.33%",
                                    textAlign: "center",
                                    padding: "0.25rem 0",
                                    backgroundColor: "#322424"
                                }}>01
                                </div>
                                <div style={{
                                    width: "33.33%",
                                    textAlign: "center",
                                    padding: "0.25rem 0",
                                    backgroundColor: "#322424"
                                }}>02
                                </div>
                                <div style={{
                                    width: "33.33%",
                                    textAlign: "center",
                                    padding: "0.25rem 0",
                                    backgroundColor: "#322424"
                                }}>03
                                </div>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", width: "25%", gap: "0.25rem"}}>
                            <div style={{textAlign: "center", padding: "0.25rem 0", backgroundColor: "#2C4370"}}>Q2
                            </div>
                            <div style={{display: "flex"}}>
                                <div style={{
                                    width: "33.33%",
                                    textAlign: "center",
                                    padding: "0.25rem 0",
                                    backgroundColor: "#322424"
                                }}>04
                                </div>
                                <div style={{
                                    width: "33.33%",
                                    textAlign: "center",
                                    padding: "0.25rem 0",
                                    backgroundColor: "#322424"
                                }}>05
                                </div>
                                <div style={{
                                    width: "33.33%",
                                    textAlign: "center",
                                    padding: "0.25rem 0",
                                    backgroundColor: "#322424"
                                }}>06
                                </div>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", width: "25%", gap: "0.25rem"}}>
                            <div style={{textAlign: "center", padding: "0.25rem 0", backgroundColor: "#2C4370"}}>Q3
                            </div>
                            <div style={{display: "flex"}}>
                                <div style={{
                                    width: "33.33%",
                                    textAlign: "center",
                                    padding: "0.25rem 0",
                                    backgroundColor: "#322424"
                                }}>07
                                </div>
                                <div style={{
                                    width: "33.33%",
                                    textAlign: "center",
                                    padding: "0.25rem 0",
                                    backgroundColor: "#322424"
                                }}>08
                                </div>
                                <div style={{
                                    width: "33.33%",
                                    textAlign: "center",
                                    padding: "0.25rem 0",
                                    backgroundColor: "#322424"
                                }}>09
                                </div>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", width: "25%", gap: "0.25rem"}}>
                            <div style={{textAlign: "center", padding: "0.25rem 0", backgroundColor: "#2C4370"}}>Q4
                            </div>
                            <div style={{display: "flex"}}>
                                <div style={{
                                    width: "33.33%",
                                    textAlign: "center",
                                    padding: "0.25rem 0",
                                    backgroundColor: "#322424"
                                }}>10
                                </div>
                                <div style={{
                                    width: "33.33%",
                                    textAlign: "center",
                                    padding: "0.25rem 0",
                                    backgroundColor: "#322424"
                                }}>11
                                </div>
                                <div style={{
                                    width: "33.33%",
                                    textAlign: "center",
                                    padding: "0.25rem 0",
                                    backgroundColor: "#322424"
                                }}>12
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between", marginTop: "3.9rem"}}>
                        <div>
                            <svg className="svg" width="286" height="172" viewBox="0 0 286 172" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="285.52" height="172" rx="13.76" fill="#272727"/>
                                <path
                                    d="M25.969 47.3352C25.0113 47.3352 24.2133 47.0049 23.5748 46.3444C22.9473 45.695 22.6336 44.6987 22.6336 43.3558V41.1432H17.8286V39.6406H29.3375V43.3558C29.3375 44.6547 29.0237 45.6399 28.3963 46.3114C27.7688 46.9939 26.9597 47.3352 25.969 47.3352ZM23.872 43.3558C23.872 44.1924 24.0536 44.8088 24.4169 45.2051C24.7802 45.6014 25.2975 45.7995 25.969 45.7995C27.3891 45.7995 28.0991 44.9849 28.0991 43.3558V41.1432H23.872V43.3558ZM22.3859 48.6413C23.3106 48.6413 24.1197 48.8284 24.8132 49.2027C25.5177 49.577 26.0626 50.0888 26.4479 50.7383C26.8332 51.3988 27.0258 52.1308 27.0258 52.9344C27.0258 53.727 26.8552 54.415 26.5139 54.9984C26.1727 55.5818 25.7434 56.0166 25.226 56.3028H26.8772V57.822H17.8286V56.3028H19.5128C18.9845 56.0056 18.5441 55.5598 18.1919 54.9654C17.8506 54.382 17.68 53.6995 17.68 52.9179C17.68 52.1143 17.8781 51.3878 18.2744 50.7383C18.6707 50.0888 19.2266 49.577 19.9421 49.2027C20.6577 48.8284 21.4723 48.6413 22.3859 48.6413ZM22.3694 56.3028C23.0519 56.3028 23.6463 56.1652 24.1527 55.89C24.6591 55.6148 25.0444 55.2406 25.3085 54.7672C25.5837 54.3049 25.7213 53.793 25.7213 53.2316C25.7213 52.6702 25.5893 52.1583 25.3251 51.696C25.0609 51.2337 24.6756 50.8649 24.1692 50.5897C23.6629 50.3145 23.0684 50.1769 22.3859 50.1769C21.6924 50.1769 21.087 50.3145 20.5696 50.5897C20.0632 50.8649 19.6725 51.2337 19.3973 51.696C19.1331 52.1583 19.001 52.6702 19.001 53.2316C19.001 53.793 19.1331 54.3049 19.3973 54.7672C19.6725 55.2406 20.0632 55.6148 20.5696 55.89C21.087 56.1652 21.6869 56.3028 22.3694 56.3028ZM26.8772 68.1549L13.5685 62.7059V61.1538L17.9277 62.9371L26.8772 59.2879V60.9556L19.5459 63.7957L26.8772 66.6027V68.1549ZM17.68 73.6117C17.68 72.7641 17.8726 71.9935 18.2579 71.3C18.6432 70.6175 19.1881 70.0781 19.8926 69.6818C20.6081 69.2965 21.4337 69.1039 22.3694 69.1039C23.2941 69.1039 24.1087 69.3021 24.8132 69.6983C25.5287 70.1056 26.0736 70.656 26.4479 71.3495C26.8332 72.043 27.0258 72.8191 27.0258 73.6777C27.0258 74.5364 26.8332 75.3124 26.4479 76.0059C26.0736 76.6994 25.5342 77.2443 24.8297 77.6406C24.1252 78.0479 23.3051 78.2516 22.3694 78.2516C21.4337 78.2516 20.6081 78.0424 19.8926 77.6241C19.1881 77.2168 18.6432 76.6609 18.2579 75.9564C17.8726 75.2519 17.68 74.4703 17.68 73.6117ZM19.001 73.6117C19.001 74.1511 19.1276 74.6574 19.3807 75.1308C19.6339 75.6041 20.0137 75.9839 20.5201 76.2701C21.0264 76.5673 21.6429 76.7159 22.3694 76.7159C23.0959 76.7159 23.7124 76.5728 24.2188 76.2866C24.7251 76.0004 25.0994 75.6261 25.3416 75.1638C25.5948 74.7015 25.7213 74.2006 25.7213 73.6612C25.7213 73.1108 25.5948 72.6045 25.3416 72.1421C25.0994 71.6908 24.7251 71.3275 24.2188 71.0523C23.7124 70.7771 23.0959 70.6395 22.3694 70.6395C21.6319 70.6395 21.0099 70.7716 20.5036 71.0358C19.9972 71.311 19.6174 71.6743 19.3642 72.1256C19.1221 72.5769 19.001 73.0723 19.001 73.6117ZM27.0423 84.6359C27.0423 85.7367 26.7066 86.6283 26.0351 87.3108C25.3746 87.9933 24.4169 88.3346 23.162 88.3346H17.8286V86.8485H22.9473C23.85 86.8485 24.538 86.6228 25.0113 86.1715C25.4957 85.7202 25.7379 85.1037 25.7379 84.3222C25.7379 83.5296 25.4902 82.8966 24.9948 82.4233C24.4995 81.9609 23.7784 81.7298 22.8317 81.7298H17.8286V80.2272H26.8772V81.7298H25.5893C26.0516 82.027 26.4093 82.4288 26.6625 82.9352C26.9157 83.4525 27.0423 84.0194 27.0423 84.6359ZM22.6997 99.0451C22.4134 99.0451 22.1107 99.0286 21.7915 98.9955V91.7633C20.8998 91.8183 20.2008 92.121 19.6945 92.6714C19.1991 93.2328 18.9514 93.9098 18.9514 94.7024C18.9514 95.3519 19.1 95.8913 19.3973 96.3206C19.7055 96.7609 20.1128 97.0691 20.6191 97.2453V98.8634C19.7495 98.6213 19.0395 98.1369 18.4891 97.4104C17.9497 96.6838 17.68 95.7812 17.68 94.7024C17.68 93.8438 17.8726 93.0732 18.2579 92.3907C18.6432 91.7192 19.1881 91.1909 19.8926 90.8056C20.6081 90.4203 21.4337 90.2277 22.3694 90.2277C23.3051 90.2277 24.1252 90.4148 24.8297 90.7891C25.5342 91.1633 26.0736 91.6862 26.4479 92.3577C26.8332 93.0402 27.0258 93.8218 27.0258 94.7024C27.0258 95.561 26.8387 96.3206 26.4644 96.9811C26.0901 97.6415 25.5727 98.1479 24.9123 98.5002C24.2628 98.8634 23.5253 99.0451 22.6997 99.0451ZM23.0134 97.4929C23.5858 97.4929 24.0757 97.3663 24.4829 97.1132C24.9013 96.86 25.215 96.5132 25.4241 96.0729C25.6443 95.6436 25.7544 95.1647 25.7544 94.6364C25.7544 93.8768 25.5122 93.2273 25.0278 92.6879C24.5435 92.1596 23.872 91.8568 23.0134 91.7798V97.4929ZM22.6997 109.284C22.4134 109.284 22.1107 109.268 21.7915 109.235L21.7915 102.003C20.8998 102.058 20.2008 102.36 19.6945 102.911C19.1991 103.472 18.9514 104.149 18.9514 104.942C18.9514 105.591 19.1 106.131 19.3973 106.56C19.7055 107 20.1128 107.308 20.6191 107.485L20.6191 109.103C19.7495 108.861 19.0395 108.376 18.4891 107.65C17.9497 106.923 17.68 106.021 17.68 104.942C17.68 104.083 17.8726 103.313 18.2579 102.63C18.6432 101.959 19.1881 101.43 19.8926 101.045C20.6081 100.66 21.4337 100.467 22.3694 100.467C23.3051 100.467 24.1252 100.654 24.8297 101.028C25.5342 101.403 26.0736 101.926 26.4479 102.597C26.8332 103.28 27.0258 104.061 27.0258 104.942C27.0258 105.8 26.8387 106.56 26.4644 107.22C26.0901 107.881 25.5727 108.387 24.9123 108.74C24.2628 109.103 23.5253 109.284 22.6997 109.284ZM23.0134 107.732C23.5858 107.732 24.0757 107.606 24.4829 107.353C24.9013 107.099 25.215 106.753 25.4241 106.312C25.6443 105.883 25.7544 105.404 25.7544 104.876C25.7544 104.116 25.5122 103.467 25.0278 102.927C24.5435 102.399 23.872 102.096 23.0134 102.019L23.0134 107.732ZM25.4076 112.77C25.925 113.035 26.3268 113.409 26.613 113.893C26.8992 114.389 27.0423 114.989 27.0423 115.693H25.4902V115.297C25.4902 113.613 24.5765 112.77 22.7492 112.77H17.8286V111.268H26.8772V112.77H25.4076Z"
                                    fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M145.856 127.28C168.654 127.28 187.136 108.798 187.136 85.9997C187.136 63.2014 168.654 44.7197 145.856 44.7197C123.058 44.7197 104.576 63.2014 104.576 85.9997C104.576 108.798 123.058 127.28 145.856 127.28ZM145.856 121.383C165.398 121.383 181.239 105.541 181.239 85.9998C181.239 66.4583 165.398 50.6169 145.856 50.6169C126.315 50.6169 110.473 66.4583 110.473 85.9998C110.473 105.541 126.315 121.383 145.856 121.383Z"
                                      fill="url(#paint0_linear_369_3527)"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M24.4768 31.7539C29.9572 31.7539 34.3999 27.3112 34.3999 21.8308C34.3999 16.3504 29.9572 11.9077 24.4768 11.9077C18.9964 11.9077 14.5537 16.3504 14.5537 21.8308C14.5537 27.3112 18.9964 31.7539 24.4768 31.7539ZM24.4766 30.3363C29.174 30.3363 32.9821 26.5282 32.9821 21.8308C32.9821 17.1333 29.174 13.3253 24.4766 13.3253C19.7791 13.3253 15.9711 17.1333 15.9711 21.8308C15.9711 26.5282 19.7791 30.3363 24.4766 30.3363Z"
                                      fill="url(#paint1_linear_369_3527)"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M14.4268 134.848C19.5677 148.383 26.7827 160.896 35.6837 172H44.6555C35.0991 161.069 27.3337 148.532 21.817 134.848H14.4268ZM273.825 85.9998C273.825 84.9709 273.813 83.9447 273.789 82.9214L280.601 80.6123C280.669 82.3996 280.704 84.1957 280.704 85.9999C280.704 118.54 269.409 148.443 250.525 172H241.554C261.649 149.015 273.825 118.929 273.825 85.9998Z"
                                      fill="#222222"/>
                                <circle cx="251.067" cy="30.2189" r="18.5231" fill="#FF0000"/>
                                <circle cx="251.067" cy="49.483" r="18.5231" fill="#FF9901"/>
                                <circle cx="251.067" cy="30.2189" r="18.5231" fill="#FF0000" fillOpacity="0.31"/>
                                <rect x="211.904" y="86" width="37.152" height="26.144" rx="3.44" fill="#DEB76C"/>
                                <line x1="211.904" y1="94.5998" x2="224.976" y2="94.5998" stroke="black"
                                      strokeWidth="0.688"/>
                                <line x1="235.984" y1="94.5998" x2="249.056" y2="94.5998" stroke="black"
                                      strokeWidth="0.688"/>
                                <line x1="211.904" y1="102.856" x2="224.976" y2="102.856" stroke="black"
                                      strokeWidth="0.688"/>
                                <line x1="235.984" y1="102.856" x2="249.056" y2="102.856" stroke="black"
                                      strokeWidth="0.688"/>
                                <path d="M230.755 86.2065C227.383 88.7316 225.885 90.522 224.632 94.6001" stroke="black"
                                      strokeWidth="0.688"/>
                                <path d="M236.328 94.6002C235.649 90.674 233.783 88.7968 230.871 86.1735" stroke="black"
                                      strokeWidth="0.688"/>
                                <path d="M230.879 112.33C227.07 109.329 225.456 107.352 224.687 102.698" stroke="black"
                                      strokeWidth="0.688"/>
                                <path d="M236.292 102.666C235.745 106.875 234.585 108.949 231.476 112.298"
                                      stroke="black" strokeWidth="0.688"/>
                                <path d="M224.632 94.2559C225.952 97.9681 225.846 99.9086 224.632 103.2" stroke="black"
                                      strokeWidth="0.688"/>
                                <path d="M236.328 94.9438C234.484 97.678 234.66 99.3561 236.328 102.512" stroke="black"
                                      strokeWidth="0.688"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M198.174 130.682C185.555 145.443 166.798 154.8 145.856 154.8C107.859 154.8 77.0562 123.997 77.0562 86.0002C77.0562 48.003 107.859 17.2002 145.856 17.2002C173.119 17.2002 196.677 33.0569 207.813 56.0507L200.972 57.7528C190.705 37.7592 169.878 24.0802 145.856 24.0802C111.659 24.0802 83.936 51.8027 83.936 86.0002C83.936 120.198 111.659 147.92 145.856 147.92C164.145 147.92 180.583 139.991 191.918 127.382L198.174 130.682Z"
                                      fill="#1B1B1B" fillOpacity="0.43"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M95.2669 0C77.0238 10.7545 62.5021 27.1483 54.0991 46.7839H61.6361C71.4884 25.6613 89.0533 8.85955 110.709 0H95.2669ZM95.2671 172C77.2374 161.371 62.8426 145.235 54.3966 125.904H61.9604C71.8712 146.703 89.289 163.237 110.71 172H95.2671ZM181.002 0C187.153 2.51643 192.974 5.67361 198.382 9.38855L206.001 6.40302C202.948 4.09226 199.758 1.95313 196.445 0H181.002ZM231.395 137.363C222.818 151.615 210.78 163.549 196.444 172H181.001C199.402 164.472 214.849 151.211 225.121 134.437L231.395 137.363Z"
                                      fill="#222222"/>
                                <defs>
                                    <linearGradient id="paint0_linear_369_3527" x1="167.369" y1="122.384" x2="123.708"
                                                    y2="49.6151" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.0561552" stopColor="#2D9AFF"/>
                                        <stop offset="0.284826" stopColor="#6EFF3C"/>
                                        <stop offset="0.439466" stopColor="#FFF171"/>
                                        <stop offset="0.753682" stopColor="#C82BFF" stopOpacity="0.92"/>
                                        <stop offset="0.910791" stopColor="#F20000"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_369_3527" x1="29.6482" y1="30.5771" x2="19.1527"
                                                    y2="13.0845" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.114942" stopColor="#FF0000"/>
                                        <stop offset="0.401231" stopColor="#FFF171"/>
                                        <stop offset="0.509379" stopColor="#6EFF3C"/>
                                        <stop offset="0.680166" stopColor="#2D9AFF"/>
                                        <stop offset="0.925224" stopColor="#C82BFF" stopOpacity="0.56"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "flex-end"
                        }}>
                            <span style={{fontSize: "0.85rem"}}>current balance</span>
                            <span style={{fontSize: "2.5rem"}}>700.85 €</span>
                            <div style={{display: "flex", alignItems: "center", justifyContent: "end", gap: "1rem"}}>
                                <span>Add expense</span>
                                <svg className="svg" width="36" height="36" viewBox="0 0 36 36" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="1" width="34" height="34" rx="4" fill="#FFF171" fillOpacity="0.2"
                                          stroke="#FFF171" strokeWidth="2"/>
                                    <line x1="18.999" y1="10.6362" x2="18.999" y2="23.7271" stroke="#FFF171"
                                          strokeWidth="2"/>
                                    <line x1="25.3638" y1="17.23" x2="12.2729" y2="17.23" stroke="#FFF171"
                                          strokeWidth="2"/>
                                </svg>
                            </div>
                            <div style={{display: "flex", alignItems: "center", justifyContent: "end", gap: "1rem"}}>
                                <span>Add income</span>
                                <svg className="svg" width="36" height="36" viewBox="0 0 36 36" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="1" width="34" height="34" rx="4" fill="#FFF171" fillOpacity="0.2"
                                          stroke="#FFF171" strokeWidth="2"/>
                                    <line x1="18.999" y1="10.6362" x2="18.999" y2="23.7271" stroke="#FFF171"
                                          strokeWidth="2"/>
                                    <line x1="25.3638" y1="17.23" x2="12.2729" y2="17.23" stroke="#FFF171"
                                          strokeWidth="2"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div style={{display: "flex", marginTop: "3rem"}}>
                        <table style={{width: "100%", borderCollapse: "collapse"}}>
                            <tbody>
                            <tr>
                                <td>Income</td>
                                <td style={{textAlign: "end"}}>30.50</td>
                                <td style={{textAlign: "end"}}>EUR</td>
                            </tr>
                            <tr>
                                <td>Expense</td>
                                <td style={{textAlign: "end"}}>130.50</td>
                                <td style={{textAlign: "end"}}>EUR</td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor: "#D0D0D014"}}>Balance in selected period</td>
                                <td style={{
                                    textAlign: "end",
                                    backgroundColor: "#D0D0D014",
                                    color: "firebrick"
                                }}>-100.00
                                </td>
                                <td style={{
                                    textAlign: "end",
                                    backgroundColor: "#D0D0D014",
                                    color: "firebrick"
                                }}>EUR
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div style={{backgroundColor: "#0F0F0F", minHeight: "50vh", width: "30%"}}>
                    <div className="div-card-manager" style={{marginBottom: "5rem"}}>
                        <div className="div-inner-left-manager-second dark-blue-background">July total</div>
                        <div className="div-inner-right-manager-second dark-red-background">-100.00€</div>
                    </div>
                    <span style={{color: "white", backgroundColor: "transparent", fontWeight: "500"}}>Income in selected period</span>
                    <table cellSpacing="0" cellPadding="0" border="0" width="100%" style={{marginTop: "1rem"}}>
                        <tbody>
                        <tr>
                            <td>
                                <div style={{width: "100%", height: "11.75rem", overflow: "auto"}}>
                                    <table cellSpacing="0" cellPadding="0" border="0" width="100%"
                                           style={{fontWeight: "300", fontSize: "0.85rem"}}>
                                        <tbody>
                                        <tr>
                                            <td className="cell-blue">03-01-2025</td>
                                            <td className="cell-blue">3.50 €</td>
                                            <td className="cell-blue">Some payment</td>
                                        </tr>
                                        <tr>
                                            <td className="cell-brown">04-01-2025</td>
                                            <td className="cell-brown">1.50 €</td>
                                            <td className="cell-brown">Some payment</td>
                                        </tr>
                                        <tr>
                                            <td className="cell-blue">07-01-2025</td>
                                            <td className="cell-blue">20.00 €</td>
                                            <td className="cell-blue">Some payment</td>
                                        </tr>
                                        <tr>
                                            <td className="cell-brown">11-01-2025</td>
                                            <td className="cell-brown">4.00 €</td>
                                            <td className="cell-brown">ABC Company</td>
                                        </tr>
                                        <tr>
                                            <td className="cell-blue">14-01-2025</td>
                                            <td className="cell-blue">1.50 €</td>
                                            <td className="cell-blue">Payment from Bob</td>
                                        </tr>
                                        <tr>
                                            <td className="cell-brown">11-01-2025</td>
                                            <td className="cell-brown">4.00 €</td>
                                            <td className="cell-brown">ABC Company</td>
                                        </tr>
                                        <tr>
                                            <td className="cell-blue">14-01-2025</td>
                                            <td className="cell-blue">1.50 €</td>
                                            <td className="cell-blue">Payment from Bob</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <br/>
                    <span style={{color: "white", backgroundColor: "transparent", fontWeight: "500"}}>Income in selected period</span>
                    <table cellSpacing="0" cellPadding="0" border="0" width="100%"
                           style={{marginTop: "1rem", fontWeight: "300", fontSize: "0.85rem"}}>
                        <tbody>
                        <tr>
                            <td>
                                <div style={{width: "100%", height: "11.75rem", overflow: "auto"}}>
                                    <table cellSpacing="0" cellPadding="1" border="0" width="100%">
                                        <tbody>
                                        <tr>
                                            <td className="cell-blue">03-01-2025</td>
                                            <td className="cell-blue">3.50 €</td>
                                            <td className="cell-blue">Some payment</td>
                                        </tr>
                                        <tr>
                                            <td className="cell-brown">04-01-2025</td>
                                            <td className="cell-brown">1.50 €</td>
                                            <td className="cell-brown">Some payment</td>
                                        </tr>
                                        <tr>
                                            <td className="cell-blue">07-01-2025</td>
                                            <td className="cell-blue">20.00 €</td>
                                            <td className="cell-blue">Some payment</td>
                                        </tr>
                                        <tr>
                                            <td className="cell-brown">11-01-2025</td>
                                            <td className="cell-brown">4.00 €</td>
                                            <td className="cell-brown">ABC Company</td>
                                        </tr>
                                        <tr>
                                            <td className="cell-blue">14-01-2025</td>
                                            <td className="cell-blue">1.50 €</td>
                                            <td className="cell-blue">Payment from Bob</td>
                                        </tr>
                                        <tr>
                                            <td className="cell-brown">11-01-2025</td>
                                            <td className="cell-brown">4.00 €</td>
                                            <td className="cell-brown">ABC Company</td>
                                        </tr>
                                        <tr>
                                            <td className="cell-blue">14-01-2025</td>
                                            <td className="cell-blue">1.50 €</td>
                                            <td className="cell-blue">Payment from Bob</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </>
    )
}
export default ManagerComponent;