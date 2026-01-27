<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { apiBase } from "@/utilities/config.js";
import { Icon } from "@iconify/vue";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const modules = [EffectCoverflow, Pagination, Navigation];


// Slider buttons
const slider = ref(null);
const slideLeft = () => {
  slider.value.scrollBy({ left: -260, behavior: "smooth" });
};
const slideRight = () => {
  slider.value.scrollBy({ left: 260, behavior: "smooth" });
};

// toggle FAQ
const openIndex = ref(null);

const toggleFAQ = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

// get api for property highlights
const properties = ref([]);

const fetchProperties = async () => {
  try {
    const response = await axios.get(`${apiBase}property/toplist`);
    properties.value = response.data.data || [];
  } catch (error) {
    console.error("Error fetching properties:", error);
  }
};

// image path variable
const imageBase = "https://hauslyapi.scfnaogaon.org/storage/";

// get api for what's new
const popularProperties = ref([]);

const fetchPopularProperties = async () => {
  try {
    const res = await axios.get(`${apiBase}property/best-deals`);
    console.log(res.data.data);
    popularProperties.value = res.data.data || [];
  } catch (error) {
    console.error("Error fetching popular properties:", error);
  }
};

// get api for FAQ
const faqs = ref([]);
const fetchFAQ = async () => {
  try {
    const res = await axios.get(`${apiBase}faqs`);
    faqs.value = res.data.faqs || [];
  } catch (error) {
    console.error("Error fetching FAQ:", error);
  }
};

onMounted(() => {
  fetchProperties();
  fetchPopularProperties();
  fetchFAQ();
});
</script>

<template>
  <div class="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed body-bg">
    <div
      class="w-full flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 px-3 sm:px-6 lg:px-0"
    >
      <!-- LEFT FRAME -->
      <div
        class="relative frame w-full lg:w-1/2 h-[220px] sm:h-[320px] md:h-[380px] lg:h-[460px] xl:h-[520px]"
      >
        <video autoplay muted loop playsinline>
          <source src="/video/Video_1.mp4" type="video/mp4" />
        </video>

        <!-- overlay shade -->
        <div class="absolute inset-0 bg-[#0E1B01]/40"></div>

        <!-- overlay content -->
        <div
          class="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8 lg:px-12"
        >
          <!-- Logo -->
          <div
            class="absolute top-4 sm:top-6 lg:top-10 left-4 sm:left-8 lg:left-12 flex items-center gap-3"
          >
            <div class="w-7 sm:w-9 h-5 sm:h-6 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3 8V7h17v1zm17 4v1H3v-1zM3 17h17v1H3z" />
              </svg>
            </div>

            <div
              class="bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
            >
              <div class="text-sm sm:text-lg lg:text-xl font-extrabold">SERENO</div>
              <div class="text-sm sm:text-lg lg:text-xl font-extrabold">LEVANDE</div>
            </div>
          </div>

          <!-- center text -->
          <h1
            class="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
          >
            Elevating Homes<br />Into Destinations
          </h1>

          <button
            class="mt-4 sm:mt-6 text-xs sm:text-sm w-[150px] sm:w-[190px] lg:w-[210px] h-[34px] sm:h-[40px] rounded-lg font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] text-black hover:shadow-lg transition"
          >
            Book Your Stay
          </button>
        </div>
      </div>

      <!-- RIGHT FRAME -->
      <div
        class="relative frame w-full lg:w-1/2 h-[220px] sm:h-[320px] md:h-[380px] lg:h-[460px] xl:h-[520px]"
      >
        <video autoplay muted loop playsinline>
          <source src="/video/Video_2.mp4" type="video/mp4" />
        </video>

        <!-- overlay shade -->
        <div class="absolute inset-0 bg-[#0E1B01]/40"></div>

        <!-- overlay content -->
        <div
          class="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-10"
        >
          <!-- top buttons -->
          <div
            class="absolute top-4 sm:top-6 lg:top-10 right-4 sm:right-6 lg:right-10 flex flex-col sm:flex-row gap-2 sm:gap-4"
          >
            <button
              class="px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent border border-white/30"
            >
              Sign Up as Tenant
            </button>

            <button
              class="w-[160px] sm:w-[180px] lg:w-[200px] h-[34px] sm:h-[40px] rounded-lg text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] text-black hover:shadow-lg transition"
            >
              Sign Up as Landlord
            </button>
          </div>

          <!-- search -->
          <div class="w-full flex justify-center mt-8 sm:mt-0">
            <div class="relative w-full sm:w-[320px] md:w-[380px] lg:w-[420px]">
              <input
                type="text"
                placeholder="Search"
                class="w-full px-4 pl-10 sm:pl-12 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] text-black placeholder-black outline-none"
              />

              <svg
                class="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11 17a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0 2a8 8 0 1 0 0-16a8 8 0 0 0 0 16"
                />
                <path
                  fill="currentColor"
                  d="M15.32 15.29a1 1 0 0 1 1.414.005l3.975 4a1 1 0 0 1-1.418 1.41l-3.975-4a1 1 0 0 1 .004-1.414Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Container -->
    <div class="w-full px-3 sm:px-5 md:px-6 lg:px-8 xl:px-10 mx-auto max-w-7xl">
    
      <!-- Crafting Value Section -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 pt-16 sm:pt-24 lg:pt-32"
      >
        <!-- LEFT TEXT -->
        <div
          class="bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent flex flex-col justify-center"
        >
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold montserrat mb-4 sm:mb-6"
          >
            Crafting Value Beyond Walls
          </h2>

          <p
            class="text-white mb-5 sm:mb-6 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl"
          >
            We believe every property holds a quiet radiance cemented into its very
            structure. Through gentle upscaling and meticulous care, we draw out that
            hidden brilliance, allowing the space to unfold into an unforgettable living
            experience.
          </p>

          <button
            class="text-xs sm:text-sm w-[150px] sm:w-[170px] lg:w-[200px] h-[34px] sm:h-[38px] lg:h-[42px] rounded-lg font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] text-black hover:shadow-lg transition"
          >
            Book Your Stay
          </button>
        </div>

        <!-- RIGHT IMAGE GRID -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
          <!-- TOP LARGE IMAGE -->
          <div class="col-span-1 sm:col-span-2 overflow-hidden rounded-xl">
            <img
              class="w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[270px] xl:h-[300px] object-cover hover:scale-105 transition duration-500"
              src="/images/WhatsApp Image 2026-01-19 at 12.36.06 PM.jpeg"
            />
          </div>

          <!-- BOTTOM LEFT -->
          <div class="overflow-hidden rounded-xl">
            <img
              class="w-full h-[140px] sm:h-[170px] md:h-[200px] lg:h-[150px] xl:h-[170px] object-cover hover:scale-105 transition duration-500"
              src="/images/WhatsApp Image 2026-01-19 at 12.36.08 PM.jpeg"
            />
          </div>

          <!-- BOTTOM RIGHT -->
          <div class="overflow-hidden rounded-xl">
            <img
              class="w-full h-[140px] sm:h-[170px] md:h-[200px] lg:h-[150px] xl:h-[170px] object-cover hover:scale-105 transition duration-500"
              src="/images/WhatsApp Image 2026-01-19 at 12.36.07 PM (3).jpeg"
            />
          </div>
        </div>
      </div>

      <!-- Property Section -->
       <!-- <section class="w-full pt-16 sm:pt-24 lg:pt-32">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold montserrat text-center bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent mb-8 pb-[4px] sm:mb-12"
        >
          Property Highlights
        </h2>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <button
            @click="slideLeft"
            class="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/30 flex items-center justify-center text-white"
          >
            ❮
          </button>

          <div
            ref="slider"
            class="flex gap-5 sm:gap-6 lg:gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide py-4"
          >
            <div
              v-for="property in properties"
              :key="property.id"
              class="flex-shrink-0 w-[200px] sm:w-[150px] lg:w-[200px] bg-[#0E1B01]/80 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition"
            >

              <div class="h-[150px] sm:h-[160px] lg:h-[200px] overflow-hidden">
                <img
                  :src="imageBase + property?.photos?.[0]?.path"
                  class="w-full h-full object-cover"
                  :alt="property.property_name || 'Property Image'"
                />
              </div>

              <div class="p-2 text-white">
                <div class="flex gap-3 justify-between">
                  <h3 class="font-semibold text-sm sm:text-sm lg:text-sm line-clamp-2">
                    {{ property.property_name }}
                  </h3>
                  <div
                    class="text-right font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent text-sm sm:text-base"
                  >
                    ${{ property.base_price_per_night }}
                  </div>
                </div>

                <p class="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">Flat for sale</p>

                <div class="flex justify-between text-xs sm:text-sm text-gray-300">
                  <span class="flex items-center gap-1">
                    <Icon
                      icon="material-symbols:bed-outline-rounded"
                      style="font-size: 20px"
                    ></Icon>
                    2 Bedrooms
                  </span>
                  <span>📐 214m²</span>
                </div>
              </div>
            </div>
          </div> 
          <button
            @click="slideRight"
            class="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/30 flex items-center justify-center text-white"
          >
            ❯
          </button>
        </div>
      </section>  -->

      <!-- Property Section -->
      <section class="w-full pt-16 sm:pt-24 lg:pt-32">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold montserrat text-center bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent mb-8 pb-[4px] sm:mb-12"
        >
          Property Highlights
        </h2>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Left Button -->
          <button
            class="swiper-button-prev-custom absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/30 flex items-center justify-center text-white"
          >
            ‹
          </button>

          <!-- Right Button -->
          <button
            class="swiper-button-next-custom absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/30 flex items-center justify-center text-white"
          >
            ›
          </button>

          <!-- Swiper -->
          <Swiper
            v-if="properties.length"
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'auto'"
            :loop="properties.length >= 3"
            :coverflowEffect="{
              rotate: 0,
              stretch: 0,
              depth: 220,
              modifier: 1,
              slideShadows: false,
            }"
            :pagination="{ clickable: true }"
            :navigation="{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }"
            :modules="modules"
            class="propertySwiper"
          >
            <SwiperSlide
              v-for="property in properties"
              :key="property.id"
              class="property-slide"
            >
              <!-- Card -->
              <div
                class="bg-[#0E1B01]/80 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition"
              >
                <div class="h-[160px] overflow-hidden">
                  <img
                    :src="imageBase + property?.photos?.[0]?.path"
                    class="w-full h-full object-cover"
                  />
                </div>

                <div class="p-3 text-white">
                  <div class="flex justify-between">
                    <h3 class="font-semibold text-sm line-clamp-2">
                      {{ property.property_name }}
                    </h3>

                    <div
                      class="font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent text-sm"
                    >
                      ${{ property.base_price_per_night }}
                    </div>
                  </div>

                  <p class="text-xs text-gray-300 mb-2">Flat for sale</p>

                  <div class="flex justify-between text-xs text-gray-300">
                    <span class="flex items-center gap-1">
                      <Icon icon="material-symbols:bed-outline-rounded" />
                      2 Bedrooms
                    </span>
                    <span>📐 214m²</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <!-- fallback -->
          <p v-else class="text-center text-gray-400 mt-6">
            No properties available right now.
          </p>
        </div>
      </section>

      <!-- What's New Section -->
      <section
        class="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20"
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
          class="lg:col-span-2 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4"
        >
          <!-- cards 1-->
          <div
            v-for="popularProperty in popularProperties"
            :key="popularProperty.id"
            class="bg-[#0B0F0C] rounded-xl xs:rounded-2xl overflow-hidden border border-white/5"
          >
            <div class="relative">
              <img
                :src="imageBase + popularProperty?.photos?.[0]?.path"
                class="w-full h-[100px] xs:h-[140px] sm:h-[160px] md:h-[180px] object-cover"
              />
              <span
                class="absolute -bottom-2 xs:-bottom-3 text-[8px] xs:text-[10px] font-semibold bg-[#B8FBE1] text-black px-2 xs:px-3 py-0.5 xs:py-1 rounded-full flex items-center gap-1 shadow-md"
              >
                ✦ POPULAR
              </span>
            </div>

            <div
              class="pt-4 xs:pt-6 pb-3 xs:pb-4 px-3 xs:px-4 text-white space-y-2 xs:space-y-3"
            >
              <div class="flex justify-between items-center">
                <p class="text-sm xs:text-base sm:text-lg font-semibold">
                  ${{ popularProperty.base_price_per_night
                  }}<span class="text-[10px] xs:text-xs font-normal text-white/60">
                    /month</span
                  >
                </p>

                <div
                  class="w-6 xs:w-8 h-6 xs:h-8 rounded-full bg-white flex items-center justify-center"
                >
                  <svg
                    class="w-3 xs:w-4 h-3 xs:h-4 text-[#6EE7C8]"
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

              <h3 class="text-xs xs:text-sm font-semibold">
                {{ popularProperty.property_name }}
              </h3>

              <p class="text-[10px] xs:text-xs text-white/60 line-clamp-1">
                {{ popularProperty.street_address }}
              </p>

              <div
                class="border-t border-white/10 pt-2 xs:pt-3 flex justify-between text-[9px] xs:text-[11px] text-white/70"
              >
                <div class="flex items-center gap-1">
                  <svg
                    class="w-3 xs:w-4 h-3 xs:h-4 text-[#6EE7C8]"
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
                    class="w-3 xs:w-4 h-3 xs:h-4 text-[#6EE7C8]"
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
                  2 Bath
                </div>

                <div class="flex items-center gap-1 hidden xs:flex">
                  <svg
                    class="w-3 xs:w-4 h-3 xs:h-4 text-[#6EE7C8]"
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
                  5x7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- browser listing section -->
      <section
        class="items-center bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent flex flex-col justify-center"
      >
        <button
          class="text-xs sm:text-sm w-[140px] sm:w-[160px] lg:w-[200px] h-[32px] sm:h-[36px] lg:h-[40px] mt-1 rounded-lg font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] text-black hover:shadow-lg transition"
        >
          Browse Category Listing
        </button>
      </section>

      <!-- Tenant Facilities Section -->
      <section class="w-full pt-16 sm:pt-24 lg:pt-32">
        <!-- Heading -->
        <div class="mb-10 lg:mb-16 text-center lg:text-left">
          <h2
            class="text-4xl sm:text-5xl font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
          >
            Tenant Facilities
          </h2>
          <p class="text-white text-sm sm:text-base mt-4 max-w-xl mx-auto lg:mx-0">
            Thoughtfully curated facilities that ensure tenants enjoy convenience,
            security, and modern comfort.
          </p>
        </div>

        <!-- Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <!-- Titles Column (Desktop) / Facility Stacks (Mobile) -->
          <div class="lg:col-span-1 flex flex-col lg:space-y-10 space-y-6">
            <!-- Facility 1 -->
            <div class="flex flex-col lg:block">
              <div class="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                Daily Housekeeping
              </div>
              <p class="text-sm sm:text-base text-gray-300 mt-2 lg:mt-4">
                Daily housekeeping ensures your home stays spotless, comfortable, and
                effortlessly maintained.
              </p>
            </div>

            <!-- Facility 2 -->
            <div class="flex flex-col lg:block">
              <div class="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                Breakfast Inclusive
              </div>
              <p class="text-sm sm:text-base text-gray-300 mt-2 lg:mt-4">
                Breakfast is included every morning, offering fresh and nourishing meals
                to start your day right.
              </p>
            </div>

            <!-- Facility 3 -->
            <div class="flex flex-col lg:block">
              <div class="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                Coffee & Tea Station
              </div>
              <p class="text-sm sm:text-base text-gray-300 mt-2 lg:mt-4">
                Enjoy complimentary coffee and tea station available at all times.
              </p>
            </div>

            <!-- Facility 4 -->
            <div class="flex flex-col lg:block">
              <div class="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                Toiletries & Spa Amenities
              </div>
              <p class="text-sm sm:text-base text-gray-300 mt-2 lg:mt-4">
                Premium toiletries and spa amenities for a relaxing experience.
              </p>
            </div>
          </div>

          <!-- Image Column -->
          <div
            class="w-full flex justify-center lg:justify-end mt-10 lg:mt-0 lg:col-span-2"
          >
            <img
              src="/images/WhatsApp Image 2026-01-19 at 12.36.06 PM.jpeg"
              class="w-full max-w-[380px] h-auto sm:h-[300px] md:h-[400px] object-cover rounded-2xl"
              alt="Tenant Facilities"
            />
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="w-full pt-16 sm:pt-24">
        <!-- Heading & Arrows -->
        <div
          class="flex flex-col lg:flex-row items-start justify-between mb-12 gap-6 lg:gap-0"
        >
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent max-w-full lg:max-w-[650px]"
          >
            What Do Our Clients Say About Us
          </h2>

          <!-- Navigation Buttons -->
          <div class="flex gap-4 lg:mt-0">
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
        <div
          class="overflow-x-auto scroll-smooth flex gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          <!-- Testimonial Card (repeat for each) -->
          <div
            class="flex-shrink-0 w-full sm:w-[300px] md:w-[340px] lg:w-[360px] h-auto flex flex-col rounded-xl bg-[#0B1F00] p-4 snap-start"
          >
            <div class="mb-4 flex items-start justify-between">
              <Icon
                icon="ri:double-quotes-r"
                style="color: #acffcb; font-size: 25px"
              ></Icon>
              <div class="flex gap-1">
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
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

          <!-- card 2 -->
          <div
            class="flex-shrink-0 w-full sm:w-[300px] md:w-[340px] lg:w-[360px] h-auto flex flex-col rounded-xl bg-[#0B1F00] p-4 snap-start"
          >
            <div class="mb-4 flex items-start justify-between">
              <Icon
                icon="ri:double-quotes-r"
                style="color: #acffcb; font-size: 25px"
              ></Icon>
              <div class="flex gap-1">
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
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

          <!-- Copy above card for others -->
          <div
            class="flex-shrink-0 w-full sm:w-[300px] md:w-[340px] lg:w-[360px] h-auto flex flex-col rounded-xl bg-[#0B1F00] p-4 snap-start"
          >
            <div class="mb-4 flex items-start justify-between">
              <Icon
                icon="ri:double-quotes-r"
                style="color: #acffcb; font-size: 25px"
              ></Icon>
              <div class="flex gap-1">
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
                <Icon
                  icon="prime:star-fill"
                  style="color: #acffcb; font-size: 20px"
                ></Icon>
              </div>
            </div>
            <p class="mb-3 flex-grow text-sm leading-relaxed text-white">
              Excellent stay! Staff was super friendly and the location is perfect. Very
              comfortable and clean property.
            </p>
            <div class="mt-auto flex items-center gap-3">
              <div>
                <p class="text-sm font-semibold leading-tight text-white">Jane Doe</p>
                <div class="mt-1 flex items-center gap-2 text-sm text-gray-400">
                  <img
                    src="/images/pro-02.jpg"
                    alt="Profile"
                    class="w-8 h-8 rounded-full object-cover border border-[#ACFFCB]/40"
                  />
                  <span>Chittagong, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Add more cards as needed -->
        </div>
      </section>

      <!-- asked quesiton section -->
      <section class="w-full pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <!-- Header -->
        <div class="text-center mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto">
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
          <!-- FAQ Card Template -->
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="border border-white/20 bg-[#0B130B]/50 rounded-lg sm:rounded-xl overflow-hidden hover:border-white/40 transition"
          >
            <!-- Question Button -->
            <button
              @click="toggleFAQ(index)"
              class="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center text-left group"
            >
              <h3
                class="text-sm sm:text-base lg:text-lg font-semibold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
              >
                {{ faq.question }}
              </h3>

              <!-- + / - icon -->
              <span
                class="text-white/60 group-hover:text-white transition text-xl sm:text-2xl"
              >
                {{ openIndex === index ? "−" : "+" }}
              </span>
            </button>

            <!-- Answer -->
            <div
              v-show="openIndex === index"
              class="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 border-t border-white/10 pt-2"
            >
              <p class="text-white text-xs sm:text-sm md:text-base leading-relaxed">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- footer section -->
    <section
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 py-8 gap-4 relative bg-cover bg-bottom bg-no-repeat px-4 sm:px-6 md:px-8 lg:px-12 pt-20 w-full overflow-hidden footer-bg"
    >
      <div class="col-span-1 sm:col-span-2 lg:col-span-3">
        <h2
          class="text-lg sm:text-xl md:text-xl lg:text-xl font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent mb-4 sm:mb-6"
        >
          SERENO
          <br />
          LEVANDE
        </h2>

        <p class="text-sm sm:text-base md:text-lg py-3 text-white">
          Your trusted partner for finding safe, verified, and professional housing
          solutions worldwide.
        </p>
        <div class="flex items-center gap-4 pt-0 md:pt-4 flex-wrap">
          <a href="#"><Icon icon="logos:facebook" style="font-size: 30px"></Icon> </a>
          <a href="#"
            ><Icon icon="skill-icons:instagram" style="font-size: 30px"></Icon
          ></a>
          <a href="#" class="text-white text-[30px]">
            <Icon icon="skill-icons:twitter"></Icon>
          </a>
          <a href="#"><Icon icon="logos:linkedin-icon" style="font-size: 30px"></Icon></a>
        </div>
      </div>
      <div class="col-span-1 sm:col-span-1 lg:col-span-1">
        <h3
          class="text-sm sm:text-base md:text-lg lg:text-lg font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent pb-2"
        >
          Quick Links
        </h3>
        <p class="text-white text-sm sm:text-base py-2 sm:py-3">About Us</p>
        <p class="text-white text-sm sm:text-base py-2 sm:py-3">How It Works</p>
        <p class="text-white text-sm sm:text-base py-2 sm:py-3">FAQ</p>
      </div>
      <div class="col-span-1 sm:col-span-2 lg:col-span-2">
        <h3
          class="text-sm sm:text-base md:text-lg lg:text-lg font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent pb-2"
        >
          Contact Us
        </h3>
        <p class="text-white text-sm sm:text-base py-2 sm:py-3 flex gap-2 items-center">
          <Icon icon="mdi:map-marker" style="color: #acffcb; font-size: 20px"></Icon>
          <span class="break-words">House 123, Road 45, Gulshan 2, Dhaka 1212</span>
        </p>
        <p class="text-white text-sm sm:text-base py-2 sm:py-3 flex gap-2 items-center">
          <Icon
            icon="mingcute:phone-fill"
            style="color: #acffcb; font-size: 20px; align-items: center"
          ></Icon
          >+880 1234-567890
        </p>
        <p class="text-white text-sm sm:text-base py-2 sm:py-3 flex gap-2 items-center">
          <Icon icon="clarity:email-solid" style="color: #acffcb; font-size: 20px"></Icon
          >info@serenobd.com
        </p>
      </div>
      <hr
        class="col-span-1 sm:col-span-2 lg:col-span-6 mb-8 border-white border-opacity-15"
      />
      <div class="col-span-1 sm:col-span-2 lg:col-span-3">
        <p
          class="text-xs sm:text-sm font-extrabold montserrat bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
        >
          © 2025. All rights Reserved.
        </p>
      </div>
      <div
        class="col-span-1 sm:col-span-2 lg:col-span-3 items-center justify-evenly flex"
      >
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

.body-bg {
  background-image: url("/images/Landing_Page.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.footer-bg {
  background-image: url("/images/WhatsApp Image 2026-01-21 at 10.33.39 AM.jpeg");
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  min-height: 100%;
}

.montserrat {
  font-family: "Montserrat", sans-serif;
}
.frame {
  overflow: hidden;
  clip-path: polygon(
    0% 0%,
    32% 0%,
    36% 6%,
    64% 6%,
    68% 0%,
    100% 0%,
    100% 100%,
    68% 100%,
    64% 94%,
    36% 94%,
    32% 100%,
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

.propertySwiper {
  padding-bottom: 40px;
}

.property-slide {
  width: 220px;
}

@media (min-width: 640px) {
  .property-slide {
    width: 260px;
  }
}

@media (min-width: 1024px) {
  .property-slide {
    width: 300px;
  }
}
</style>
