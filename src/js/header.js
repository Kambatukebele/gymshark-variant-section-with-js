// --- Global Constants ---
const MEGA_MENU = document.querySelector("#mega-menu");
// Mobile Menu Toggles
const HAMBURGER_MENU = document.querySelector("#hamburger-menu");
const CLOSE_MENU = document.querySelector("#close-menu");

// Mobile/Desktop Elements for Tab Switching
const NAV_DESKTOP = document.querySelectorAll(".nav-desktop");
const MOBILE_MENU_TABS = document.querySelectorAll(".mobile-menu-tab");
const MEGA_MENU_CONTENT_PANELS = document.querySelectorAll(
  ".mega-menu-content-panel",
);
const MEGA_MENU_IMAGE_PANEL = document.querySelector("#mega-menu-images");

// Subheading Accordion Toggles
const SUB_HEADINGS = document.querySelectorAll(".subHeadings");
const SUB_HEADINGS_ICONS = document.querySelectorAll(".subHeadingsIcons");
const SUB_HEADINGS_BODYS = document.querySelectorAll(".subHeadingsBodys");

// Global variable to manage the closing delay
let menuCloseTimeout;

// --- 1. Mobile Menu Open/Close ---
function showAndHideMenuOnSmallDevice() {
  function toggleMenuOnSmallDevice(menu_icon, mega_menu, class_one, class_two) {
    if (!menu_icon || !mega_menu) return;
    menu_icon.addEventListener("click", () => {
      mega_menu.classList.replace(class_one, class_two);

      // Show images on mobile when menu opens
      if (class_two === "translate-x-0" && MEGA_MENU_IMAGE_PANEL) {
        MEGA_MENU_IMAGE_PANEL.classList.remove("hidden");
      }
    });
  }
  toggleMenuOnSmallDevice(
    HAMBURGER_MENU,
    MEGA_MENU,
    "translate-x-full",
    "translate-x-0",
  );
  toggleMenuOnSmallDevice(
    CLOSE_MENU,
    MEGA_MENU,
    "translate-x-0",
    "translate-x-full",
  );
}
showAndHideMenuOnSmallDevice();

// --- 2. Mobile Subheading Accordion ---
function openAndCloseSubHeadings() {
  SUB_HEADINGS.forEach((sub_heading, index) => {
    sub_heading.addEventListener("click", () => {
      if (SUB_HEADINGS_ICONS[index].classList.contains("rotate-180")) {
        SUB_HEADINGS_ICONS[index].classList.remove("rotate-180");
        SUB_HEADINGS_BODYS[index].classList.add("hidden");
        SUB_HEADINGS_BODYS[index].classList.remove("flex");
      } else {
        SUB_HEADINGS_ICONS[index].classList.add("rotate-180");
        SUB_HEADINGS_BODYS[index].classList.remove("hidden");
        SUB_HEADINGS_BODYS[index].classList.add("flex");
      }
    });
  });
}
openAndCloseSubHeadings();

// --- 3. Mobile Tab Switching (Click) - ONLY TOGGLE 'hidden' ---
function handleMobileMenuContentSwitch() {
  MOBILE_MENU_TABS.forEach((tab) => {
    tab.addEventListener("click", () => {
      // 1. Clear all active states
      MOBILE_MENU_TABS.forEach((t) =>
        t.classList.remove("border-b", "font-bold"),
      );

      // 2. Hide all content panels using 'hidden'
      MEGA_MENU_CONTENT_PANELS.forEach((panel) => {
        panel.classList.add("hidden");
      });

      // 3. Get the target ID and panel
      const targetId = tab.getAttribute("data-target-id");
      const targetPanel = document.getElementById(targetId);

      // 4. Show the target panel by REMOVING 'hidden'
      if (targetPanel) {
        targetPanel.classList.remove("hidden");
        // Tailwind's responsive classes (flex and lg:grid) handle the correct display style.
      }

      // 5. Apply 'active' styling
      tab.classList.add("border-b", "font-bold");
    });
  });
}
handleMobileMenuContentSwitch();

// --- 4. Desktop Mega Menu Show/Hide and Content Switching (Hover) ---
function showOrHideMegaMenuOnLargeDevice() {
  // Show/Hide Menu functions remain the same
  const showMenu = () => {
    clearTimeout(menuCloseTimeout);
    MEGA_MENU.classList.replace("lg:opacity-0", "lg:opacity-100");
    MEGA_MENU.classList.replace("lg:translate-y-20", "lg:translate-y-0");
    MEGA_MENU.classList.remove("lg:pointer-events-none");

    // *** FIX: Explicitly SHOW the image panel when the menu opens on XL screens ***
    if (window.innerWidth >= 1280 && MEGA_MENU_IMAGE_PANEL) {
      // 1280px is Tailwind's 'xl' breakpoint
      MEGA_MENU_IMAGE_PANEL.classList.remove("hidden");
    }
  };

  const hideMenu = () => {
    menuCloseTimeout = setTimeout(() => {
      MEGA_MENU.classList.replace("lg:opacity-100", "lg:opacity-0");
      MEGA_MENU.classList.replace("lg:translate-y-0", "lg:translate-y-20");
      MEGA_MENU.classList.add("lg:pointer-events-none");

      // *** FIX: Explicitly HIDE the image panel when the menu closes on XL screens ***
      if (window.innerWidth >= 1280 && MEGA_MENU_IMAGE_PANEL) {
        MEGA_MENU_IMAGE_PANEL.classList.add("hidden");
      }
    }, 50);
  };

  NAV_DESKTOP.forEach((nav) => {
    // 1. MOUSEENTER: Opens menu and switches content
    nav.addEventListener("mouseenter", () => {
      showMenu();

      // Content Switching Logic:
      const targetId = nav.getAttribute("data-target-id");

      // Hide all content panels using 'hidden'
      MEGA_MENU_CONTENT_PANELS.forEach((panel) => {
        panel.classList.add("hidden");
      });

      const targetPanel = document.getElementById(targetId);

      // Show the target panel by REMOVING 'hidden'
      if (targetPanel) {
        targetPanel.classList.remove("hidden");
      }
    });

    // 2. MOUSELEAVE: Starts the close timer (Needed for menu to close properly)
    nav.addEventListener("mouseleave", hideMenu);
  });

  // 3. MEGA_MENU MOUSEENTER: Cancel the close timer
  MEGA_MENU.addEventListener("mouseenter", showMenu);

  // 4. MEGA_MENU MOUSELEAVE: Starts the close timer
  MEGA_MENU.addEventListener("mouseleave", hideMenu);
}
showOrHideMegaMenuOnLargeDevice();

// --- 5. Initialize image panel visibility on load ---
function initializeImagePanelVisibility() {
  if (!MEGA_MENU_IMAGE_PANEL) return;

  // Hide images on desktop (xl) by default, show on mobile
  if (window.innerWidth >= 1280) {
    MEGA_MENU_IMAGE_PANEL.classList.add("hidden");
  } else {
    MEGA_MENU_IMAGE_PANEL.classList.remove("hidden");
  }
}
initializeImagePanelVisibility();

// Re-initialize on window resize
window.addEventListener("resize", initializeImagePanelVisibility);
