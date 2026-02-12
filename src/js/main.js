function showVariantsOnMobile() {
  const variantIconMobile = document.querySelectorAll(".variant-icon-mobile"); // open modal
  const variantMobileBlock = document.querySelectorAll(".variant-mobile-block"); // modal block
  const closeVariantModal = document.querySelectorAll(".close-variant-modal"); // close modal

  //Open Modal
  variantIconMobile.forEach((modal, index) => {
    modal.addEventListener("click", () => {
      variantMobileBlock[index].classList.replace("hidden", "flex");
    });
  });
  closeVariantModal.forEach((closeModal, jIndex) => {
    closeModal.addEventListener("click", () => {
      variantMobileBlock[jIndex].classList.replace("flex", "hidden");
    });
  });
}
showVariantsOnMobile();
