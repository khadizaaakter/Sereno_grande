<template>
  <div class="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed body-bg">
    <div class="w-full px-20 mx-auto max-w-8xl">
      <!-- header -->
      <section class="grid grid-cols-2 mb-[3rem]">
        <div class="p-6 flex items-center gap-6">
          <Icon icon="lucide:menu" class="w-8 h-8 text-white"></Icon>
          <div class="flex flex-col">
            <div
              class="text-sm sm:text-lg lg:text-xl font-extrabold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
            >
              SERENO
            </div>
            <div
              class="text-sm sm:text-lg lg:text-xl font-extrabold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
            >
              LEVANDE
            </div>
          </div>
        </div>
        <div class="flex justify-end p-4 items-center gap-3">
          <Icon
            icon="iconamoon:profile-bold"
            style="color: #acffcb; font-size: 35px"
          ></Icon>
        </div>
      </section>

      <!-- details -->
      <section class="mt-[3rem]">
        <div class="grid grid-cols-2">
          <div class="p-6 flex">
            <div
              class="bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
            >
              <div class="text-3xl font-extrabold montserrat">Dhanmondi 8/A</div>
            </div>
          </div>

          <div class="p-6 flex justify-end">
            <div
              class="bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
            >
              <div class="text-3xl font-extrabold montserrat">৳20,000/month</div>
            </div>
          </div>
        </div>
        <div class="p-6 text-white">
          This modern 2-bedroom apartment is fully furnished and located in the heart of
          Gulshan. The property features spacious rooms, a fully equipped kitchen, and a
          private balcony with stunning views of the city. Perfect for both short-term and
          long-term stays.
        </div>

        <div class="justify-items-center p-10">
          <img
            src="/images/WhatsApp Image 2026-01-19 at 12.36.05 PM (1).jpeg"
            alt=""
            class="rounded-3xl w-full h-[500px] object-cover"
          />
        </div>

        <div class="flex w-20 gap-4 ml-10">
          <img
            src="/public/images/WhatsApp Image 2026-01-19 at 12.36.05 PM (2).jpeg"
            alt=""
            class="rounded-md"
          />
          <img
            src="/public/images/WhatsApp Image 2026-01-19 at 12.36.05 PM (2).jpeg"
            alt=""
            class="rounded-md"
          />
          <img
            src="/public/images/WhatsApp Image 2026-01-19 at 12.36.05 PM (2).jpeg"
            alt=""
            class="rounded-md"
          />
          <img
            src="/public/images/WhatsApp Image 2026-01-19 at 12.36.05 PM (2).jpeg"
            alt=""
            class="rounded-md"
          />
        </div>
      </section>

      <!-- About -->
      <section class="mt-[3rem]">
        <div class="bg-[#0B130B] rounded-xl px-8 py-6">
          <div class="flex items-center justify-between mb-6">
            <div
              class="bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
            >
              <h2 class="text-2xl font-extrabold montserrat">About This Property</h2>
            </div>

            <button
              class="text-xs sm:text-sm w-[150px] sm:w-[190px] lg:w-[210px] h-[34px] sm:h-[40px] rounded-lg font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] text-black hover:shadow-lg transition"
            >
              Book Your Property
            </button>
          </div>

          <div class="grid grid-cols-4 gap-y-5 gap-x-8 text-white text-sm pl-[200px]">
            <!-- Item -->
            <div class="flex items-center gap-3">
              <Icon icon="lucide:bed-double" class="w-5 h-5 text-[#ACFFCB]" />
              <span>2 Bed</span>
            </div>

            <div class="flex items-center gap-3">
              <Icon icon="lucide:bath" class="w-5 h-5 text-[#ACFFCB]" />
              <span>4 Bathrooms</span>
            </div>

            <div class="flex items-center gap-3">
              <Icon icon="lucide:home" class="w-5 h-5 text-[#ACFFCB]" />
              <span>3,000 Sqft</span>
            </div>

            <div class="flex items-center gap-3">
              <Icon icon="lucide:compass" class="w-5 h-5 text-[#ACFFCB]" />
              <span>North Facing</span>
            </div>

            <div class="flex items-center gap-3">
              <Icon icon="ph:building-apartment-light" class="w-5 h-5 text-[#ACFFCB]" />
              <span>2 Balcony</span>
            </div>

            <div class="flex items-center gap-3">
              <Icon icon="lucide:sofa" class="w-5 h-5 text-[#ACFFCB]" />
              <span>Furnished</span>
            </div>

            <div class="flex items-center gap-3">
              <Icon
                icon="material-symbols:elevator-sharp"
                class="w-5 h-5 text-[#ACFFCB]"
              />
              <span>2 Elevator</span>
            </div>

            <div class="flex items-center gap-3">
              <Icon icon="lucide:parking-circle" class="w-5 h-5 text-[#ACFFCB]" />
              <span>1 Parking</span>
            </div>
          </div>
        </div>
      </section>

      <!-- description -->
      <section class="mt-[3rem]">
        <div class="bg-[#0B130B] rounded-xl px-8 py-6">
          <div class="flex items-center justify-between mb-6">
            <div
              class="bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
            >
              <h2 class="text-2xl font-extrabold montserrat">Description</h2>
            </div>
          </div>
          <p class="text-white">
            See the highlights of London via 2 classic modes of transport on this half-day
            adventure. First, you will enjoy great views of Westminster Abbey, the Houses
            of Parliament, and the London Eye, as you meander through the historic streets
            on board a vintage double decker bus. Continue to see St. Paul’s Cathedral,
            Sir Christopher Wren’s architectural masterpiece, where Admirals Nelson and
            Wellington are buried, and Princess Diana and Prince Charles got married.
            Continue to the Tower of London, built nearly 1,000 years ago during the reign
            of William the Conqueror. Home to the Crown Jewels, the Tower is protected by
            the famous Beefeaters, and the imposing palace has been used as a fortress and
            a prison throughout its history. Your guide will take you to Traitors Gate,
            where prisoners entered the Tower for the last time.
          </p>
        </div>
      </section>

      <!-- Other featured project -->
      <section class="mt-[5rem]">
        <div class="rounded-xl px-8 py-6">
          <div class="flex items-center mb-6 justify-center">
            <div
              class="bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent"
            >
              <h2 class="text-3xl font-extrabold montserrat justify-self-center">
                Other Featured Properties
              </h2>
              <div class="relative max-w-[103rem] mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Left Button -->
                <button
                  @click="slideLeft"
                  class="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/30 flex items-center justify-center text-white"
                >
                  ❮
                </button>

                <!-- Slider -->
                <div
                  ref="slider"
                  class="flex gap-5 sm:gap-6 lg:gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide py-4"
                >
                  <div
                    v-for="property in properties"
                    :key="property.id"
                    class="flex-shrink-0 w-[200px] sm:w-[150px] lg:w-[200px] bg-[#0E1B01]/80 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition"
                  >
                    <!-- Image -->
                    <div class="h-[150px] sm:h-[160px] lg:h-[200px] overflow-hidden">
                      <img
                        :src="imageBase + property?.photos?.[0]?.path"
                        class="w-full h-full object-cover"
                        :alt="property.property_name || 'Property Image'"
                      />
                    </div>

                    <!-- Content -->
                    <div class="p-2 text-white">
                      <div class="flex gap-3 justify-between">
                        <h3
                          class="font-semibold text-sm sm:text-sm lg:text-sm line-clamp-2"
                        >
                          {{ property.property_name }}
                        </h3>
                        <div
                          class="text-right font-semibold bg-gradient-to-r from-[#ACFFCB] to-[#85A4D5] bg-clip-text text-transparent text-sm sm:text-base"
                        >
                          ${{ property.base_price_per_night }}
                        </div>
                      </div>

                      <p class="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">
                        Flat for sale
                      </p>

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

                <!-- Right Button -->
                <button
                  @click="slideRight"
                  class="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/30 flex items-center justify-center text-white"
                >
                  ❯
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import { apiBase } from "@/utilities/config.js";

// Slider buttons
const slider = ref(null);
const slideLeft = () => {
  slider.value.scrollBy({ left: -260, behavior: "smooth" });
};
const slideRight = () => {
  slider.value.scrollBy({ left: 260, behavior: "smooth" });
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

onMounted(() => {
  fetchProperties();
});
</script>
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
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
