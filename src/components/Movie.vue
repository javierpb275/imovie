<template>
    <div style="background-color:rgba(0, 0, 0, 0)">
        <div class="container px-5 py-5 mx-auto" style="cursor: auto;">
            <div class="lg:w-auto lg:ml-64 mx-auto flex flex-wrap">
                <img
                    alt="ecommerce"
                    class="lg:w-1/4 w-full lg:h-auto h-80 object-contain object-center rounded"
                    src="https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg"
                    style="cursor: auto;"
                />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style="cursor: auto;">
                    <h1
                        class="text-gray-900 text-3xl title-font font-medium mb-1"
                        style="cursor: auto;"
                    >Movie title</h1>
                    <p
                        class="leading-relaxed"
                    >Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.</p>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        <div class="flex">
                            <span class="mr-3">Color</span>
                            <button
                                class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
                            ></button>
                            <button
                                class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"
                            ></button>
                            <button
                                class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"
                            ></button>
                        </div>
                        <div class="flex ml-6 items-center">
                            <span class="mr-3">Size</span>
                            <div class="relative">
                                <select
                                    class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                                >
                                    <option>SM</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                                <span
                                    class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"
                                >
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-4 h-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <span class="title-font font-medium text-2xl text-gray-900">$45.99</span>
                        <button
                            class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                        >Buy</button>
                        <button
                            class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                        >
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>