<template>
  <div
    class="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
    style="background-image: url('/images/Landing_Page.png')"
  >
    <div class="flex flex-col lg:flex-row gap-0 lg:gap-[2rem]">
      <div class="relative frame w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[492px]">
        <video autoplay muted loop playsinline class="w-full h-full">
          <source src="/video/Video_1.mp4" type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-[#0E1B01]/30 z-[1]"></div>

        <div
          class="absolute inset-0 flex flex-col px-4 sm:px-8 lg:px-12 py-6 sm:py-10 lg:py-12 z-10 pointer-events-none justify-center items-center"
        >
          <div
            class="flex items-center gap-3 pointer-events-auto absolute top-6 sm:top-10 lg:top-12 left-4 sm:left-8 lg:left-12"
          >
            <div class="w-[30px] sm:w-[36px] h-[20px] sm:h-[24px] text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3 8V7h17v1zm17 4v1H3v-1zM3 17h17v1H3z" />
              </svg>
            </div>
            <div
              class="bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
            >
              <div class="text-sm sm:text-lg lg:text-xl font-extrabold tracking-wider">
                SERENO
              </div>
              <div class="text-sm sm:text-lg lg:text-xl font-extrabold tracking-wide">
                GRANDE
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center gap-4">
            <h1
              class="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white leading-tight text-center pointer-events-auto"
            >
              Elevating Homes<br />Into Destinations
            </h1>
            <button
              class="text-xs sm:text-sm w-[160px] sm:w-[200px] h-[36px] sm:h-[40px] rounded-lg font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] text-black pointer-events-auto hover:shadow-lg transition"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      </div>

      <!-- right one -->
      <div class="relative frame w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[492px]">
        <video autoplay muted loop playsinline class="w-full h-full">
          <source src="/video/Video_2.mp4" type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-[#0E1B01]/30 z-[1]"></div>

        <div
          class="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 lg:p-10 z-[10]"
        >
          <!-- Buttons -->
          <div
            class="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 absolute top-4 sm:top-6 lg:top-10 right-4 sm:right-6 lg:right-10 w-full sm:w-auto"
          >
            <button
              class="tenant px-3 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent border border-white/20"
            >
              Sign Up as Tenant
            </button>
            <button
              class="text-xs sm:text-sm w-full sm:w-[180px] lg:w-[200px] h-[36px] sm:h-[40px] rounded-lg font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] text-black hover:shadow-lg transition"
            >
              Sign Up as Landlord
            </button>
          </div>

          <!-- Search Bar -->
          <div class="flex justify-center w-full">
            <div class="relative w-full sm:w-[340px] lg:w-[420px]">
              <input
                type="text"
                placeholder="Search"
                class="w-full px-3 sm:px-4 lg:px-14 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] outline-none focus:outline-none focus:ring-0 text-black placeholder-black"
              />
              <svg
                class="absolute left-3 sm:left-4 lg:left-5 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path
                    d="M11 17a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0 2a8 8 0 1 0 0-16a8 8 0 0 0 0 16"
                  />
                  <path
                    d="M15.32 15.29a1 1 0 0 1 1.414.005l3.975 4a1 1 0 0 1-1.418 1.41l-3.975-4a1 1 0 0 1 .004-1.414Z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Container -->
    <div class="w-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 mx-auto max-w-7xl">
      <!-- Crafting Value Section -->
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 pt-40">
        <div
          class="bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent flex flex-col justify-center"
        >
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold montserrat mb-4 sm:mb-6"
          >
            Crafting Value Beyond Walls
          </h2>
          <p
            class="text-white mb-4 sm:mb-6 text-xs sm:text-sm md:text-base leading-relaxed"
          >
            We believe every property holds a quiet radiance cemented into its very
            structure. Through gentle upscaling and meticulous care, we draw out that
            hidden brilliance, allowing the space to unfold into an unforgettable living
            experience.
          </p>
          <button
            class="text-xs sm:text-sm w-[140px] sm:w-[160px] lg:w-[200px] h-[32px] sm:h-[36px] lg:h-[40px] rounded-lg font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] text-black hover:shadow-lg transition"
          >
            Book Your Stay
          </button>
        </div>

        <div class="w-full grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3">
          <div class="col-span-2 overflow-hidden rounded-lg">
            <img
              class="w-full h-[120px] sm:h-[160px] md:h-[200px] lg:h-[271px] object-cover"
              src="/images/WhatsApp Image 2026-01-19 at 12.36.06 PM.jpeg"
            />
          </div>
          <div class="overflow-hidden rounded-lg">
            <img
              class="w-full h-[120px] sm:h-[160px] md:h-[200px] lg:h-[130px] object-cover"
              src="/images/WhatsApp Image 2026-01-19 at 12.36.08 PM.jpeg"
            />
          </div>
          <div class="overflow-hidden rounded-lg">
            <img
              class="w-full h-[120px] sm:h-[160px] md:h-[200px] lg:h-[130px] object-cover"
              src="/images/WhatsApp Image 2026-01-19 at 12.36.07 PM (3).jpeg"
            />
          </div>
        </div>
      </div>

      <!-- Property Section -->
      <!-- <div class="w-full py-2 sm:py-16 lg:py-20"> -->
      <div class="w-full">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold montserrat text-center bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent mb-8 sm:mb-12"
          style="padding-bottom: 5px"
        >
          Property Highlights
        </h2>

        <div class="w-full" style="padding-bottom: 60px">
          <div class="relative flex items-center justify-center group">
            <!-- Left Arrow -->
            <button
              class="absolute -left-2 sm:-left-4 lg:-left-8 z-20 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition opacity-0 group-hover:opacity-100"
            >
              ❮
            </button>

            <!-- Cards -->
            <div
              class="flex gap-7 sm:gap-4 lg:gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 py-4 scrollbar-hide"
            >
              <!-- Card 1 -->
              <div
                class="flex-shrink-0 w-[200px] sm:w-[240px] lg:w-[260px] bg-[#0E1B01]/80 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition"
              >
                <div class="h-[150px] sm:h-[180px] lg:h-[220px] overflow-hidden">
                  <img
                    src="/images/WhatsApp Image 2026-01-19 at 12.36.05 PM (1).jpeg"
                    class="w-full h-full object-cover"
                    alt="Villa"
                  />
                </div>
                <div class="p-3 sm:p-4 text-white">
                  <div class="flex gap-3 justify-between">
                    <h3 class="font-semibold text-sm sm:text-base lg:text-lg">
                      Villa, Kemah Tinggi
                    </h3>
                    <div
                      class="text-right font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent text-sm sm:text-base"
                    >
                      $990
                    </div>
                  </div>
                  <p class="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">
                    Flat for sale
                  </p>
                  <div class="flex justify-between text-xs sm:text-sm text-gray-300">
                    <span class="flex">
                      <iconify-icon
                        icon="material-symbols:bed-outline-rounded"
                        style="font-size: 20px; padding-right: 5px"
                      ></iconify-icon
                      >2 Bedrooms</span
                    >
                    <span>📐 214m²</span>
                  </div>
                </div>
              </div>

              <!-- Card 2 -->
              <div
                class="flex-shrink-0 w-[200px] sm:w-[240px] lg:w-[260px] bg-[#0E1B01]/80 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition"
              >
                <div class="h-[150px] sm:h-[180px] lg:h-[220px] overflow-hidden">
                  <img
                    src="/images/WhatsApp Image 2026-01-19 at 12.36.05 PM (2).jpeg"
                    class="w-full h-full object-cover"
                    alt="Villa"
                  />
                </div>
                <div class="p-3 sm:p-4 text-white">
                  <div class="flex gap-3 justify-between">
                    <h3 class="font-semibold text-sm sm:text-base lg:text-lg">
                      Banani Duplex Villa
                    </h3>
                    <div
                      class="text-right font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent text-sm sm:text-base"
                    >
                      $990
                    </div>
                  </div>
                  <p class="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">
                    Flat for sale
                  </p>
                  <div class="flex justify-between text-xs sm:text-sm text-gray-300 mb-2">
                    <span class="flex">
                      <iconify-icon
                        icon="material-symbols:bed-outline-rounded"
                        style="font-size: 20px; padding-right: 5px"
                      ></iconify-icon
                      >2 Bedrooms</span
                    >
                    <span>📐 214m²</span>
                  </div>
                </div>
              </div>

              <!-- Card 3 -->
              <div
                class="flex-shrink-0 w-[200px] sm:w-[240px] lg:w-[260px] bg-[#0E1B01]/80 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition"
              >
                <div class="h-[150px] sm:h-[180px] lg:h-[220px] overflow-hidden">
                  <img
                    src="/images/WhatsApp Image 2026-01-19 at 12.36.05 PM.jpeg"
                    class="w-full h-full object-cover"
                    alt="Villa"
                  />
                </div>
                <div class="p-3 sm:p-4 text-white">
                  <div class="flex gap-3 justify-between">
                    <h3 class="font-semibold text-sm sm:text-base lg:text-lg">
                      Banani Duplex Villa
                    </h3>
                    <div
                      class="text-right font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent text-sm sm:text-base"
                    >
                      $990
                    </div>
                  </div>
                  <p class="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">
                    Flat for sale
                  </p>
                  <div class="flex justify-between text-xs sm:text-sm text-gray-300 mb-2">
                    <span class="flex">
                      <iconify-icon
                        icon="material-symbols:bed-outline-rounded"
                        style="font-size: 20px; padding-right: 5px"
                      ></iconify-icon
                      >2 Bedrooms</span
                    >
                    <span>📐 214m²</span>
                  </div>
                </div>
              </div>

              <!-- Card 4 -->
              <div
                class="flex-shrink-0 w-[200px] sm:w-[240px] lg:w-[260px] bg-[#0E1B01]/80 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition"
              >
                <div class="h-[150px] sm:h-[180px] lg:h-[220px] overflow-hidden">
                  <img
                    src="/images/WhatsApp Image 2026-01-19 at 12.36.06 PM (2).jpeg"
                    class="w-full h-full object-cover"
                    alt="Villa"
                  />
                </div>
                <div class="p-3 sm:p-4 text-white">
                  <div class="flex gap-3 justify-between">
                    <h3 class="font-semibold text-sm sm:text-base lg:text-lg">
                      Banani Duplex Villa
                    </h3>
                    <div
                      class="text-right font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent text-sm sm:text-base"
                    >
                      $990
                    </div>
                  </div>

                  <p class="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">
                    Flat for sale
                  </p>
                  <div class="flex justify-between text-xs sm:text-sm text-gray-300 mb-2">
                    <span class="flex">
                      <iconify-icon
                        icon="material-symbols:bed-outline-rounded"
                        style="font-size: 20px; padding-right: 5px"
                      ></iconify-icon
                      >2 Bedrooms</span
                    >
                    <span>📐 214m²</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Arrow -->
            <button
              class="absolute -right-2 sm:-right-4 lg:-right-8 z-20 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition opacity-0 group-hover:opacity-100"
            >
              ❯
            </button>
          </div>
        </div>
      </div>

      <!-- What's New Section -->
      <section
        class="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 py-12 sm:py-16 lg:py-20"
      >
        <div
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
        >
          What's New
        </div>
        <div
          class="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed flex items-center"
        >
          We're committed to making property rentals seamless, trustworthy, and
          hassle-free for both tenants and landlords.
        </div>

        <div
          class="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          <!-- cards 1-->
          <div class="bg-[#0B0F0C] rounded-2xl overflow-hidden border border-white/5">
            <div class="relative">
              <img
                src="/images/WhatsApp Image 2026-01-19 at 12.36.06 PM (2).jpeg"
                class="w-full h-[180px] object-cover"
              />
              <span
                class="absolute -bottom-3 text-[10px] font-semibold bg-[#B8FBE1] text-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md"
              >
                ✦ POPULAR
              </span>
            </div>

            <div class="pt-6 pb-4 px-4 text-white space-y-3">
              <div class="flex justify-between items-center">
                <p class="text-lg font-semibold">
                  ৳2,095<span class="text-xs font-normal text-white/60"> /month</span>
                </p>

                <div
                  class="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682 4.318 12.682a4.5 4.5 0 010-6.364z"
                    />
                  </svg>
                </div>
              </div>

              <h3 class="text-sm font-semibold">Two Bed Apartment</h3>

              <p class="text-xs text-white/60">24 Green Corner, Dhanmondi, Dhaka</p>

              <div
                class="border-t border-white/10 pt-3 flex justify-between text-[11px] text-white/70"
              >
                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 10h16M4 10v6m16-6v6M4 14h16M6 6h12v4H6z"
                    />
                  </svg>
                  3 Beds
                </div>

                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 10h10v6H7zM5 10V7a2 2 0 012-2h10a2 2 0 012 2v3"
                    />
                  </svg>
                  2 Bathrooms
                </div>

                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 4h6v6H4zM14 14h6v6h-6zM4 14h6v6H4zM14 4h6v6h-6z"
                    />
                  </svg>
                  5x7 m²
                </div>
              </div>
            </div>
          </div>

          <!-- cards 2 -->
          <div class="bg-[#0B0F0C] rounded-2xl overflow-hidden border border-white/5">
            <div class="relative">
              <img
                src="/images/WhatsApp Image 2026-01-19 at 12.36.06 PM (2).jpeg"
                class="w-full h-[180px] object-cover"
              />

              <span
                class="absolute -bottom-3 text-[10px] font-semibold bg-[#B8FBE1] text-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md"
              >
                ✦ POPULAR
              </span>
            </div>

            <div class="pt-6 pb-4 px-4 text-white space-y-3">
              <div class="flex justify-between items-center">
                <p class="text-lg font-semibold">
                  ৳2,095<span class="text-xs font-normal text-white/60"> /month</span>
                </p>

                <div
                  class="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682 4.318 12.682a4.5 4.5 0 010-6.364z"
                    />
                  </svg>
                </div>
              </div>

              <h3 class="text-sm font-semibold">Two Bed Apartment</h3>

              <p class="text-xs text-white/60">24 Green Corner, Dhanmondi, Dhaka</p>

              <div
                class="border-t border-white/10 pt-3 flex justify-between text-[11px] text-white/70"
              >
                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 10h16M4 10v6m16-6v6M4 14h16M6 6h12v4H6z"
                    />
                  </svg>
                  3 Beds
                </div>

                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 10h10v6H7zM5 10V7a2 2 0 012-2h10a2 2 0 012 2v3"
                    />
                  </svg>
                  2 Bathrooms
                </div>

                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 4h6v6H4zM14 14h6v6h-6zM4 14h6v6H4zM14 4h6v6h-6z"
                    />
                  </svg>
                  5x7 m²
                </div>
              </div>
            </div>
          </div>

          <!-- cards 3 -->
          <div class="bg-[#0B0F0C] rounded-2xl overflow-hidden border border-white/5">
            <div class="relative">
              <img
                src="/images/WhatsApp Image 2026-01-19 at 12.36.06 PM (2).jpeg"
                class="w-full h-[180px] object-cover"
              />

              <span
                class="absolute -bottom-3 text-[10px] font-semibold bg-[#B8FBE1] text-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md"
              >
                ✦ POPULAR
              </span>
            </div>

            <div class="pt-6 pb-4 px-4 text-white space-y-3">
              <div class="flex justify-between items-center">
                <p class="text-lg font-semibold">
                  ৳2,095<span class="text-xs font-normal text-white/60"> /month</span>
                </p>

                <div
                  class="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682 4.318 12.682a4.5 4.5 0 010-6.364z"
                    />
                  </svg>
                </div>
              </div>

              <h3 class="text-sm font-semibold">Two Bed Apartment</h3>

              <p class="text-xs text-white/60">24 Green Corner, Dhanmondi, Dhaka</p>

              <div
                class="border-t border-white/10 pt-3 flex justify-between text-[11px] text-white/70"
              >
                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 10h16M4 10v6m16-6v6M4 14h16M6 6h12v4H6z"
                    />
                  </svg>
                  3 Beds
                </div>

                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 10h10v6H7zM5 10V7a2 2 0 012-2h10a2 2 0 012 2v3"
                    />
                  </svg>
                  2 Bathrooms
                </div>

                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 4h6v6H4zM14 14h6v6h-6zM4 14h6v6H4zM14 4h6v6h-6z"
                    />
                  </svg>
                  5x7 m²
                </div>
              </div>
            </div>
          </div>

          <!-- cards 4 -->
          <div class="bg-[#0B0F0C] rounded-2xl overflow-hidden border border-white/5">
            <div class="relative">
              <img
                src="/images/WhatsApp Image 2026-01-19 at 12.36.06 PM (2).jpeg"
                class="w-full h-[180px] object-cover"
              />

              <span
                class="absolute -bottom-3 text-[10px] font-semibold bg-[#B8FBE1] text-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md"
              >
                ✦ POPULAR
              </span>
            </div>

            <div class="pt-6 pb-4 px-4 text-white space-y-3">
              <div class="flex justify-between items-center">
                <p class="text-lg font-semibold">
                  ৳2,095<span class="text-xs font-normal text-white/60"> /month</span>
                </p>

                <div
                  class="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682 4.318 12.682a4.5 4.5 0 010-6.364z"
                    />
                  </svg>
                </div>
              </div>

              <h3 class="text-sm font-semibold">Two Bed Apartment</h3>

              <p class="text-xs text-white/60">24 Green Corner, Dhanmondi, Dhaka</p>

              <div
                class="border-t border-white/10 pt-3 flex justify-between text-[11px] text-white/70"
              >
                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 10h16M4 10v6m16-6v6M4 14h16M6 6h12v4H6z"
                    />
                  </svg>
                  3 Beds
                </div>

                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 10h10v6H7zM5 10V7a2 2 0 012-2h10a2 2 0 012 2v3"
                    />
                  </svg>
                  2 Bathrooms
                </div>

                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 4h6v6H4zM14 14h6v6h-6zM4 14h6v6H4zM14 4h6v6h-6z"
                    />
                  </svg>
                  5x7 m²
                </div>
              </div>
            </div>
          </div>

          <!-- cards 5 -->
          <div class="bg-[#0B0F0C] rounded-2xl overflow-hidden border border-white/5">
            <div class="relative">
              <img
                src="/images/WhatsApp Image 2026-01-19 at 12.36.06 PM (2).jpeg"
                class="w-full h-[180px] object-cover"
              />

              <span
                class="absolute -bottom-3 text-[10px] font-semibold bg-[#B8FBE1] text-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md"
              >
                ✦ POPULAR
              </span>
            </div>

            <div class="pt-6 pb-4 px-4 text-white space-y-3">
              <div class="flex justify-between items-center">
                <p class="text-lg font-semibold">
                  ৳2,095<span class="text-xs font-normal text-white/60"> /month</span>
                </p>

                <div
                  class="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682 4.318 12.682a4.5 4.5 0 010-6.364z"
                    />
                  </svg>
                </div>
              </div>

              <h3 class="text-sm font-semibold">Two Bed Apartment</h3>

              <p class="text-xs text-white/60">24 Green Corner, Dhanmondi, Dhaka</p>

              <div
                class="border-t border-white/10 pt-3 flex justify-between text-[11px] text-white/70"
              >
                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 10h16M4 10v6m16-6v6M4 14h16M6 6h12v4H6z"
                    />
                  </svg>
                  3 Beds
                </div>

                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 10h10v6H7zM5 10V7a2 2 0 012-2h10a2 2 0 012 2v3"
                    />
                  </svg>
                  2 Bathrooms
                </div>

                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 4h6v6H4zM14 14h6v6h-6zM4 14h6v6H4zM14 4h6v6h-6z"
                    />
                  </svg>
                  5x7 m²
                </div>
              </div>
            </div>
          </div>
          <!-- cards 6 -->
          <div class="bg-[#0B0F0C] rounded-2xl overflow-hidden border border-white/5">
            <div class="relative">
              <img
                src="/images/WhatsApp Image 2026-01-19 at 12.36.06 PM (2).jpeg"
                class="w-full h-[180px] object-cover"
              />

              <span
                class="absolute -bottom-3 text-[10px] font-semibold bg-[#B8FBE1] text-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md"
              >
                ✦ POPULAR
              </span>
            </div>

            <div class="pt-6 pb-4 px-4 text-white space-y-3">
              <div class="flex justify-between items-center">
                <p class="text-lg font-semibold">
                  ৳2,095<span class="text-xs font-normal text-white/60"> /month</span>
                </p>

                <div
                  class="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682 4.318 12.682a4.5 4.5 0 010-6.364z"
                    />
                  </svg>
                </div>
              </div>

              <h3 class="text-sm font-semibold">Two Bed Apartment</h3>

              <p class="text-xs text-white/60">24 Green Corner, Dhanmondi, Dhaka</p>

              <div
                class="border-t border-white/10 pt-3 flex justify-between text-[11px] text-white/70"
              >
                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 10h16M4 10v6m16-6v6M4 14h16M6 6h12v4H6z"
                    />
                  </svg>
                  3 Beds
                </div>

                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 10h10v6H7zM5 10V7a2 2 0 012-2h10a2 2 0 012 2v3"
                    />
                  </svg>
                  2 Bathrooms
                </div>

                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 4h6v6H4zM14 14h6v6h-6zM4 14h6v6H4zM14 4h6v6h-6z"
                    />
                  </svg>
                  5x7 m²
                </div>
              </div>
            </div>
          </div>
          <!-- cards 7 -->
          <div class="bg-[#0B0F0C] rounded-2xl overflow-hidden border border-white/5">
            <div class="relative">
              <img
                src="/images/WhatsApp Image 2026-01-19 at 12.36.06 PM (2).jpeg"
                class="w-full h-[180px] object-cover"
              />

              <span
                class="absolute -bottom-3 text-[10px] font-semibold bg-[#B8FBE1] text-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md"
              >
                ✦ POPULAR
              </span>
            </div>

            <div class="pt-6 pb-4 px-4 text-white space-y-3">
              <div class="flex justify-between items-center">
                <p class="text-lg font-semibold">
                  ৳2,095<span class="text-xs font-normal text-white/60"> /month</span>
                </p>

                <div
                  class="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682 4.318 12.682a4.5 4.5 0 010-6.364z"
                    />
                  </svg>
                </div>
              </div>

              <h3 class="text-sm font-semibold">Two Bed Apartment</h3>
              <p class="text-xs text-white/60">24 Green Corner, Dhanmondi, Dhaka</p>
              <div
                class="border-t border-white/10 pt-3 flex justify-between text-[11px] text-white/70"
              >
                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 10h16M4 10v6m16-6v6M4 14h16M6 6h12v4H6z"
                    />
                  </svg>
                  3 Beds
                </div>

                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 10h10v6H7zM5 10V7a2 2 0 012-2h10a2 2 0 012 2v3"
                    />
                  </svg>
                  2 Bathrooms
                </div>

                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 4h6v6H4zM14 14h6v6h-6zM4 14h6v6H4zM14 4h6v6h-6z"
                    />
                  </svg>
                  5x7 m²
                </div>
              </div>
            </div>
          </div>
          <!-- cards 8 -->
          <div class="bg-[#0B0F0C] rounded-2xl overflow-hidden border border-white/5">
            <div class="relative">
              <img
                src="/images/WhatsApp Image 2026-01-19 at 12.36.06 PM (2).jpeg"
                class="w-full h-[180px] object-cover"
              />

              <span
                class="absolute -bottom-3 text-[10px] font-semibold bg-[#B8FBE1] text-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md"
              >
                ✦ POPULAR
              </span>
            </div>

            <div class="pt-6 pb-4 px-4 text-white space-y-3">
              <div class="flex justify-between items-center">
                <p class="text-lg font-semibold">
                  ৳2,095<span class="text-xs font-normal text-white/60"> /month</span>
                </p>

                <div
                  class="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                >
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682 4.318 12.682a4.5 4.5 0 010-6.364z"
                    />
                  </svg>
                </div>
              </div>

              <h3 class="text-sm font-semibold">Two Bed Apartment</h3>

              <p class="text-xs text-white/60">24 Green Corner, Dhanmondi, Dhaka</p>

              <div
                class="border-t border-white/10 pt-3 flex justify-between text-[11px] text-white/70"
              >
                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 10h16M4 10v6m16-6v6M4 14h16M6 6h12v4H6z"
                    />
                  </svg>
                  3 Beds
                </div>

                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 10h10v6H7zM5 10V7a2 2 0 012-2h10a2 2 0 012 2v3"
                    />
                  </svg>
                  2 Bathrooms
                </div>

                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4 text-[#6EE7C8]"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 4h6v6H4zM14 14h6v6h-6zM4 14h6v6H4zM14 4h6v6h-6z"
                    />
                  </svg>
                  5x7 m²
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        class="items-center bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent flex flex-col justify-center"
      >
        <button
          class="text-xs sm:text-sm w-[140px] sm:w-[160px] lg:w-[200px] h-[32px] sm:h-[36px] lg:h-[40px] m-16 rounded-lg font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] text-black hover:shadow-lg transition"
        >
          Browse Category Listing
        </button>
      </div>
      <!-- tenant facilities -->
      <section class="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 py-16">
        <div class="lg:col-span-2">
          <h2
            class="text-4xl lg:text-5xl font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
          >
            Tenant Facilities
          </h2>
        </div>

        <div class="text-white text-sm lg:text-base leading-relaxed flex items-start">
          Thoughtfully curated facilities that ensure tenants enjoy convenience, security,
          and modern comfort.
        </div>

        <div class="lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div class="space-y-10 text-white text-2xl">
            <div>Daily<br />Housekeeping</div>
            <div>Breakfast<br />Inclusive</div>
            <div>Coffee & Tea<br />Station</div>
            <div>Toiletries & Spa<br />Amenities</div>
          </div>

          <div class="space-y-10 text-white text-m leading-relaxed">
            <div>
              Daily housekeeping ensures your home stays spotless, comfortable, and
              effortlessly maintained.
            </div>
            <div>
              Breakfast is included every morning, offering fresh and nourishing meals to
              start your day right.
            </div>
            <div>Enjoy complimentary coffee and tea station available at all times.</div>
            <div>Premium toiletries and spa amenities for a relaxing experience.</div>
          </div>

          <div class="flex justify-end">
            <img
              src="/images/WhatsApp Image 2026-01-19 at 12.36.06 PM.jpeg"
              class="w-[380px] h-[400px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      <!-- about us -->
      <!-- Testimonials Section -->
      <section class="w-full py-16">
        <div class="flex items-start justify-between mb-12">
          <h2
            class="text-4xl lg:text-5xl font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent max-w-[650px]"
          >
            What Do Our Clients Say About Us
          </h2>
          <div class="flex gap-4">
            <button class="rounded-full bg-white p-3 transition-colors hover:bg-white/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-[#ACFFCB]"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
            <button
              class="rounded-full bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] p-3 transition-colors hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-black"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Testimonials Carousel -->
        <div class="overflow-hidden">
          <div class="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            <!-- Testimonial Card 1 -->
            <div
              class="flex h-[240px] w-[360px] flex-shrink-0 flex-col rounded-xl bg-[#0B1F00] p-4"
            >
              <div class="mb-4 flex items-start justify-between">
                <div class="flex">
                  <iconify-icon
                    icon="ri:double-quotes-r"
                    style="color: #acffcb; font-size: 25px"
                  ></iconify-icon>
                </div>
                <div class="flex gap-1">
                  <iconify-icon
                    icon="prime:star-fill"
                    style="color: #acffcb; font-size: 20px"
                  ></iconify-icon>
                  <iconify-icon
                    icon="prime:star-fill"
                    style="color: #acffcb; font-size: 20px"
                  ></iconify-icon>
                  <iconify-icon
                    icon="prime:star-fill"
                    style="color: #acffcb; font-size: 20px"
                  ></iconify-icon>
                  <iconify-icon
                    icon="prime:star-fill"
                    style="color: #acffcb; font-size: 20px"
                  ></iconify-icon>
                </div>
              </div>
              <p class="mb-3 flex-grow text-sm leading-relaxed text-white">
                The property exceeded all expectations! From the thoughtful design to the
                seamless check-in process, everything was perfect. Highly recommend for
                anyone looking for quality accommodation.
              </p>
              <div class="mt-auto flex items-center gap-3">
                <div>
                  <p class="text-sm font-semibold leading-tight text-white">John Smith</p>
                  <div class="mt-1 flex items-center gap-2 text-sm text-gray-400">
                    <img
                      src="/images/pro-03.webp"
                      alt="Profile"
                      class="w-8 h-8 rounded-full object-cover border border-[#ACFFCB]/40"
                    />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 02 -->
            <div
              class="flex h-[240px] w-[360px] flex-shrink-0 flex-col rounded-xl bg-[#0B1F00] p-4"
            >
              <div class="mb-4 flex items-start justify-between">
                <div class="flex">
                  <iconify-icon
                    icon="ri:double-quotes-r"
                    style="color: #acffcb; font-size: 25px"
                  ></iconify-icon>
                </div>
                <div class="flex gap-1">
                  <iconify-icon
                    icon="prime:star-fill"
                    style="color: #acffcb; font-size: 20px"
                  ></iconify-icon>
                  <iconify-icon
                    icon="prime:star-fill"
                    style="color: #acffcb; font-size: 20px"
                  ></iconify-icon>
                  <iconify-icon
                    icon="prime:star-fill"
                    style="color: #acffcb; font-size: 20px"
                  ></iconify-icon>
                  <iconify-icon
                    icon="prime:star-fill"
                    style="color: #acffcb; font-size: 20px"
                  ></iconify-icon>
                </div>
              </div>
              <p class="mb-3 flex-grow text-sm leading-relaxed text-white">
                The property exceeded all expectations! From the thoughtful design to the
                seamless check-in process, everything was perfect. Highly recommend for
                anyone looking for quality accommodation.
              </p>
              <div class="mt-auto flex items-center gap-3">
                <div>
                  <p class="text-sm font-semibold leading-tight text-white">John Smith</p>
                  <div class="mt-1 flex items-center gap-2 text-sm text-gray-400">
                    <img
                      src="/images/pro-03.jpg"
                      alt="Profile"
                      class="w-8 h-8 rounded-full object-cover border border-[#ACFFCB]/40"
                    />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 03 -->
            <div
              class="flex h-[240px] w-[360px] flex-shrink-0 flex-col rounded-xl bg-[#0B1F00] p-4"
            >
              <div class="mb-4 flex items-start justify-between">
                <div class="flex">
                  <iconify-icon
                    icon="ri:double-quotes-r"
                    style="color: #acffcb; font-size: 25px"
                  ></iconify-icon>
                </div>
                <div class="flex gap-1">
                  <iconify-icon
                    icon="prime:star-fill"
                    style="color: #acffcb; font-size: 20px"
                  ></iconify-icon>
                  <iconify-icon
                    icon="prime:star-fill"
                    style="color: #acffcb; font-size: 20px"
                  ></iconify-icon>
                  <iconify-icon
                    icon="prime:star-fill"
                    style="color: #acffcb; font-size: 20px"
                  ></iconify-icon>
                  <iconify-icon
                    icon="prime:star-fill"
                    style="color: #acffcb; font-size: 20px"
                  ></iconify-icon>
                </div>
              </div>
              <p class="mb-3 flex-grow text-sm leading-relaxed text-white">
                The property exceeded all expectations! From the thoughtful design to the
                seamless check-in process, everything was perfect. Highly recommend for
                anyone looking for quality accommodation.
              </p>
              <div class="mt-auto flex items-center gap-3">
                <div>
                  <p class="text-sm font-semibold leading-tight text-white">John Smith</p>
                  <div class="mt-1 flex items-center gap-2 text-sm text-gray-400">
                    <img
                      src="/images/pro-02.jpg"
                      alt="Profile"
                      class="w-8 h-8 rounded-full object-cover border border-[#ACFFCB]/40"
                    />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 04 -->
            <div
              class="flex h-[240px] w-[360px] flex-shrink-0 flex-col rounded-xl bg-[#0B1F00] p-4"
            >
              <div class="mb-4 flex items-start justify-between">
                <div class="flex">
                  <iconify-icon
                    icon="ri:double-quotes-r"
                    style="color: #acffcb; font-size: 25px"
                  ></iconify-icon>
                </div>
                <div class="flex gap-1">
                  <iconify-icon
                    icon="prime:star-fill"
                    style="color: #acffcb; font-size: 20px"
                  ></iconify-icon>
                  <iconify-icon
                    icon="prime:star-fill"
                    style="color: #acffcb; font-size: 20px"
                  ></iconify-icon>
                  <iconify-icon
                    icon="prime:star-fill"
                    style="color: #acffcb; font-size: 20px"
                  ></iconify-icon>
                  <iconify-icon
                    icon="prime:star-fill"
                    style="color: #acffcb; font-size: 20px"
                  ></iconify-icon>
                </div>
              </div>
              <p class="mb-3 flex-grow text-sm leading-relaxed text-white">
                The property exceeded all expectations! From the thoughtful design to the
                seamless check-in process, everything was perfect. Highly recommend for
                anyone looking for quality accommodation.
              </p>
              <div class="mt-auto flex items-center gap-3">
                <div>
                  <p class="text-sm font-semibold leading-tight text-white">John Smith</p>
                  <div class="mt-1 flex items-center gap-2 text-sm text-gray-400">
                    <img
                      src="/images/pro-03.webp"
                      alt="Profile"
                      class="w-8 h-8 rounded-full object-cover border border-[#ACFFCB]/40"
                    />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- asked quesiton -->

      <section class="w-full py-12 sm:py-16 lg:py-20">
        <!-- Header -->
        <div class="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent mb-4 sm:mb-6"
          >
            Frequently Asked Questions
          </h2>
          <p
            class="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed"
          >
            Have questions about renting houses? <br />
            Our FAQ section gives you clear and simple answers to guide your journey.
          </p>
        </div>

        <!-- FAQ Items -->
        <div class="w-full max-w-4xl mx-auto space-y-3 sm:space-y-4">
          <!-- 1 -->
          <div
            class="border border-white/20 bg-[#0B130B]/50 rounded-lg sm:rounded-xl overflow-hidden hover:border-white/40 transition"
          >
            <button
              class="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center text-left group bg-[#0B130B]"
            >
              <h3
                class="text-sm sm:text-base lg:text-lg font-semibold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
              >
                How do I start searching for properties?
              </h3>
              <span
                class="text-white/60 group-hover:text-white transition text-xl sm:text-2xl"
                >+</span
              >
            </button>
            <div
              class="hidden px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 border-t border-white/10"
            >
              <p class="text-white text-xs sm:text-sm md:text-base leading-relaxed">
                Simply use the search bar on our homepage to filter properties by
                location, property type, and price range. You can also use Advanced Search
                for more specific filters.
              </p>
            </div>
          </div>

          <!-- 2 -->
          <div
            class="border border-white/20 bg-[#0B130B]/50 rounded-lg sm:rounded-xl overflow-hidden hover:border-white/40 transition"
          >
            <button
              class="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center text-left group bg-[#0B130B]"
            >
              <h3
                class="text-sm sm:text-base lg:text-lg font-semibold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
              >
                Can I rent a property for short-term stays?
              </h3>
              <span
                class="text-white/60 group-hover:text-white transition text-xl sm:text-2xl"
                >+</span
              >
            </button>
          </div>

          <!-- 3 -->
          <div
            class="border border-white/20 bg-[#0B130B]/50 rounded-lg sm:rounded-xl overflow-hidden hover:border-white/40 transition"
          >
            <button
              class="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center text-left group bg-[#0B130B]"
            >
              <h3
                class="text-sm sm:text-base lg:text-lg font-semibold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
              >
                How does the AI Assistant help me find a property?
              </h3>
              <span
                class="text-white/60 group-hover:text-white transition text-xl sm:text-2xl"
                >+</span
              >
            </button>
          </div>

          <!-- 4 -->
          <div
            class="border border-white/20 bg-[#0B130B]/50 rounded-lg sm:rounded-xl overflow-hidden hover:border-white/40 transition"
          >
            <button
              class="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center text-left group"
            >
              <h3
                class="text-sm sm:text-base lg:text-lg font-semibold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
              >
                Can I trust the listings with this platform?
              </h3>
              <span
                class="text-white/60 group-hover:text-white transition text-xl sm:text-2xl bg-[#0B130B]"
                >+</span
              >
            </button>
          </div>

          <!-- 5 -->
          <div
            class="border border-white/20 bg-[#0B130B]/50 rounded-lg sm:rounded-xl overflow-hidden hover:border-white/40 transition"
          >
            <button
              class="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center text-left group bg-[#0B130B]"
            >
              <h3
                class="text-sm sm:text-base lg:text-lg font-semibold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
              >
                How do I list my property?
              </h3>
              <span
                class="text-white/60 group-hover:text-white transition text-xl sm:text-2xl"
                >+</span
              >
            </button>
          </div>
        </div>
      </section>
    </div>
    <!-- footer section -->
    <section
      class="grid grid-cols-6 py-8 gap-4 relative bg-cover bg-bottom bg-no-repeat px-6 pt-20 md:px-32 2xl:w-full"
      style="
        background-image: url('/images/WhatsApp Image 2026-01-21 at 10.33.39 AM.jpeg');
      "
    >
      <div class="col-span-3">
        <h2
          class="text-xl sm:text-lg md:text-xl lg:text-xl font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent mb-4 sm:mb-6"
        >
          SERENO
          <br />
          GRANDE
        </h2>

        <p class="text-lg py-3 text-white">
          Your trusted partner for finding safe, <br />verified, and professional housing
          solutions worldwide.
        </p>
        <div class="flex items-center gap-4 pt-0 md:pt-4">
          <a href="#"
            ><iconify-icon icon="logos:facebook" style="font-size: 30px"></iconify-icon>
          </a>
          <a href="#"
            ><iconify-icon
              icon="skill-icons:instagram"
              style="font-size: 30px"
            ></iconify-icon
          ></a>
          <a href="#" class="text-white text-[30px]">
            <iconify-icon icon="skill-icons:twitter"></iconify-icon>
          </a>
          <a href="#"
            ><iconify-icon
              icon="logos:linkedin-icon"
              style="font-size: 30px"
            ></iconify-icon
          ></a>
        </div>
      </div>
      <div class="">
        <h3
          class="sm:text-m md:text-lg lg:text-lg font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent pb-2"
        >
          Quick Links
        </h3>
        <p class="text-white text-xl py-3">About Us</p>
        <p class="text-white text-xl py-3">How It Works</p>
        <p class="text-white text-xl py-3">FAQ</p>
      </div>
      <div class="col-span-2">
        <h3
          class="sm:text-m md:text-lg lg:text-lg font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent pb-2"
        >
          Contact Us
        </h3>
        <p class="text-white text-xl py-3 flex gap-2 items-center">
          <iconify-icon
            icon="mdi:map-marker"
            style="color: #acffcb; font-size: 24px"
          ></iconify-icon>
          House 123, Road 45, Gulshan 2, Dhaka 1212
        </p>
        <p class="text-white text-xl py-3 flex gap-2 items-center">
          <iconify-icon
            icon="mingcute:phone-fill"
            style="color: #acffcb; font-size: 24px; align-items: center"
          ></iconify-icon
          >+880 1234-567890
        </p>
        <p class="text-white text-xl py-3 flex gap-2 items-center">
          <iconify-icon
            icon="clarity:email-solid"
            style="color: #acffcb; font-size: 24px"
          ></iconify-icon
          >info@serenobd.com
        </p>
      </div>
      <hr class="col-span-6 mb-8 border-white border-opacity-15" />
      <div class="col-span-3">
        <p
          class="font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
        >
          © 2025. All rights Reserved.
        </p>
      </div>
      <div class="col-span-3 items-center justify-evenly flex">
        <ul class="flex items-center gap-6 text-white">
          <li>
            <a class="group relative inline-block text-[14px] no-underline" href="#"
              >Privacy Policy
            </a>
          </li>
          <li>
            <a class="group relative inline-block text-[14px] no-underline" href="#"
              >Terms &amp; Conditions</a
            >
          </li>
          <li>
            <a class="group relative inline-block text-[14px] no-underline" href="#"
              >Cookie Policy</a
            >
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap");

.montserrat {
  font-family: "Montserrat", sans-serif;
}

.frame {
  overflow: hidden;
  clip-path: polygon(
    0% 0%,
    35% 0%,
    30% 0%,
    33% 5%,
    65% 5%,
    68% 0%,
    65% 0%,
    100% 0%,
    100% 100%,
    38% 100%,
    72% 100%,
    69% 96%,
    35% 96%,
    32% 101%,
    35% 100%,
    0% 100%
  );
}

.frame video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tenant {
  background-color: white !important;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
