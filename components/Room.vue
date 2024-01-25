<template>
  <div>
    <div class="pa-4 offer-title">
      <div class="d-flex justify-space-between align-sm-center">
        <h5 class="font-weight-medium" style="font-size: 1.125rem !important">
          Deluxe Room, 1 King Bed (Skyline)
        </h5>
        <v-btn variant="plain" color="primary" class="text-none px-1">
          See details
        </v-btn>
      </div>

      <v-icon style="font-size: 16px">mdi-bed-king-outline</v-icon>
      <span class="text-caption text-md-body-2">1 King Bed</span>
      <v-icon class="pl-3" style="font-size: 16px">mdi-image-size-select-small</v-icon>
      <span class="text-caption text-md-body-2 pl-2">45 m<sup>2</sup></span>
    </div>

    <div class="image-grid">
      <div style="grid-area: main">
        <div style="position: relative" class="h-100">
          <NuxtImg src="https://i.travelapi.com/lodging/68000000/67200000/67196500/67196407/8e5a9a1d_b.jpg"
            class="w-100 h-100" />
          <v-btn variant="text" class="ma-4 btn-seemore text-none bg-white" density="comfortable" prepend-icon="mdi-grid"
            size="small">See Photos</v-btn>
        </div>
      </div>
      <NuxtImg src="https://i.travelapi.com/lodging/68000000/67200000/67196500/67196407/8e5a9a1d_b.jpg" class="w-100" />
      <NuxtImg src="https://i.travelapi.com/lodging/68000000/67200000/67196500/67196407/8e5a9a1d_b.jpg" class="w-100" />
      <NuxtImg src="https://i.travelapi.com/lodging/68000000/67200000/67196500/67196407/8e5a9a1d_b.jpg" class="w-100" />
    </div>

    <div class="mx-4 py-4">
      <div class="d-flex">
        <div style="width: 70%">
          <div class="d-flex">
            <v-icon color="success" style="font-size: 17px" class="mr-2">mdi-silverware-fork-knife</v-icon>
            <span color="success" class="text-success">Free Breakfast</span>
          </div>
          <div class="d-flex">
            <span data-v-d8277cae="" aria-hidden="true"
              class="mr-2"
              style="font-size: 17px; height: 17px; width: 17px;"><svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"
                style="font-size: 17px; height: 17px; width: 17px;">
                <path
                  d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z">
                </path>
              </svg></span>
            <span style="color: #0000008a">Without breakfast</span>
          </div>
          <div class="d-flex" style="color: #0000008a">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="mr-2"
              style="font-size: 17px; height: 17px; width: 17px">
              <path
                d="M0.93,4.2L2.21,2.93L20,20.72L18.73,22L16.73,20H4C2.89,20 2,19.1 2,18V6C2,5.78 2.04,5.57 2.11,5.38L0.93,4.2M20,8V6H7.82L5.82,4H20A2,2 0 0,1 22,6V18C22,18.6 21.74,19.13 21.32,19.5L19.82,18H20V12H13.82L9.82,8H20M4,8H4.73L4,7.27V8M4,12V18H14.73L8.73,12H4Z">
              </path>
            </svg>
            <span> Non-refundable </span>
          </div>
          <div class="d-flex">
            <v-icon color="success" style="font-size: 17px" class="mr-2">mdi-credit-card-check-outline</v-icon>
            <span color="success" class="text-success">Free cancellation before 22 Jun 2024</span>
          </div>
        </div>
        <div style="width: 30%" class="d-flex justify-space-around">
          <v-icon color="#0000008a" style="font-size: 17px">mdi-content-copy</v-icon>
          <v-icon color="#0000008a" style="font-size: 17px">mdi-line-scan</v-icon>
          <v-icon color="#0000008a" style="font-size: 17px">mdi-dots-horizontal</v-icon>
        </div>
      </div>

      <div class="d-flex mt-4 align-end">
        <div style="width: 70%">
          <div>
            <v-chip class="label-offers mt-1 mb-2" color="danger" label size="small">
              SAVE 14% TODAY!
            </v-chip>
          </div>
          <p class="relative d-inline-block mb-0 font-weight-medium text-decoration-line-through"
            style="font-size: 0.875rem !important; color: #0000008a">
            Rp 7,539,557
          </p>
          <p>
            <span style="font-size: 0.875rem !important">Rp</span>
            <span class="font-weight-medium" style="font-size: 18px" color="#0000008a">
              3,783,700
            </span>
            <span style="font-size: 0.875rem !important"> / night * </span>
          </p>
          <p class="mb-0 text-sm-caption" style="font-size: 0.75rem !important; color: #00000061 !important">
            after tax & fees
          </p>
        </div>

        <div style="width: 30%">
          <v-btn variant="tonal" color="white" class="text-none bg-primary w-100">Book Now</v-btn>
        </div>
      </div>

      <div class="d-flex mt-2 justify-space-between">
        <div style="width: 70%">
          <p style="font-size: 0.75rem; color: #00000061">
            * Member-only price, valid in app only
          </p>
        </div>
        <div style="width: 30%">
          <p class="text-primary text-right" style="font-size: 0.75rem">
            <v-icon color="primary" style="font-size: 12px">mdi-star</v-icon>
            Collect 3 points
          </p>
        </div>
      </div>

      <v-divider></v-divider>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@media (max-width: 599px) {
  .offer-title {
    background-color: white;
    position: sticky;
    top: 50px;
    z-index: 1;
  }

  .image-grid {
    grid-gap: 2px;
    display: grid;
    gap: 2px;
    grid-template-areas:
      "main other-1"
      "main other-2"
      "main other-3";
    grid-template-columns: 3fr 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  .btn-seemore {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .label-offers {
    background-color: #f44336;
    color: white;
  }
}
</style>
