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

function onHoverShowSecondImage() {
  const productCard = document.querySelectorAll(".product-card");
  const imageFirst = document.querySelectorAll(".image-first");
  const imageSecond = document.querySelectorAll(".image-second");
  const imageSecondBlock = document.querySelectorAll(".image-second-block");
  const newContainer = document.querySelectorAll(".new-container");

  productCard.forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
      imageFirst[index].classList.add("hidden");
      imageSecondBlock[index].classList.remove("hidden");
      newContainer[index].classList.add("hidden");
    });
    card.addEventListener("mouseleave", () => {
      imageFirst[index].classList.remove("hidden");
      imageSecondBlock[index].classList.add("hidden");
      newContainer[index].classList.remove("hidden");
    });
  });
}
onHoverShowSecondImage();

function productSlider() {
  const productContainer = document.querySelector("#product-container");
  const scrollLeftBtn = document.querySelector("#scroll-left-btn");
  const scrollRightBtn = document.querySelector("#scroll-right-btn");

  // Width of one item
  const item = productContainer.children[0];
  const itemWidth = item.offsetWidth;
  const gap = parseInt(getComputedStyle(productContainer).columnGap) || 0;
  const scrollAmount = itemWidth + gap;

  scrollRightBtn.addEventListener("click", () => {
    const maxScroll =
      productContainer.scrollWidth - productContainer.clientWidth;
    const newPosition = Math.min(
      productContainer.scrollLeft + scrollAmount,
      maxScroll,
    );

    productContainer.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  });

  scrollLeftBtn.addEventListener("click", () => {
    const newPosition = Math.max(productContainer.scrollLeft - scrollAmount, 0);

    productContainer.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  });
}
productSlider();
