// import { useRouter } from "next/navigation";

// const HEADER_OFFSET = 100;
// const NAVIGATION_DELAY = 300;

// const scrollToElement = (elementId) => {
//   const element = document.getElementById(elementId);

//   if (!element) {
//     console.warn(`Элемент с id "${elementId}" не найден`);
//     return false;
//   }

//   const elementPosition = element.getBoundingClientRect().top + window.scrollY;
//   const offsetPosition = elementPosition - HEADER_OFFSET;

//   window.scrollTo({
//     top: offsetPosition,
//     behavior: "smooth",
//   });

//   return true;
// };

// export const useAnchorNavigation = (href, onClick) => {
//   const router = useRouter();

//   const handleClick = (e) => {
//     e.preventDefault();

//     const id = href.replace("#", "");

//     if (!id) {
//       console.error("Некорректный href:", href);
//       return;
//     }

//     const elementExists = scrollToElement(id);

//     if (!elementExists) {
//       const pushPromise = router.push("/");

//       if (pushPromise && typeof pushPromise.then === "function") {
//         pushPromise
//           .then(() => {
//             setTimeout(() => {
//               scrollToElement(id);
//             }, NAVIGATION_DELAY);
//           })
//           .catch((error) => {
//             console.error("Ошибка навигации:", error);
//           });
//       } else {
//         // Fallback для случаев, когда push не возвращает Promise
//         setTimeout(() => {
//           scrollToElement(id);
//         }, NAVIGATION_DELAY);
//       }
//     }

//     onClick?.();
//   };

//   return handleClick;
// };
import { useRouter } from "next/navigation";

const HEADER_OFFSET = 100;
const NAVIGATION_DELAY = 300;

const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);

  if (!element) {
    console.warn(`Элемент с id "${elementId}" не найден`);
    return false;
  }

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - HEADER_OFFSET;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });

  return true;
};

export const useAnchorNavigation = () => {
  const router = useRouter();

  const handleClick = (e, href, onClick) => {
    // Проверяем, является ли это якорной ссылкой
    if (!href.startsWith("#")) return;

    e.preventDefault();

    const id = href.replace("#", "");

    if (!id) {
      console.error("Некорректный href:", href);
      return;
    }

    const elementExists = scrollToElement(id);

    if (!elementExists) {
      const pushPromise = router.push("/");

      if (pushPromise && typeof pushPromise.then === "function") {
        pushPromise
          .then(() => {
            setTimeout(() => {
              scrollToElement(id);
            }, NAVIGATION_DELAY);
          })
          .catch((error) => {
            console.error("Ошибка навигации:", error);
          });
      } else {
        // Fallback для случаев, когда push не возвращает Promise
        setTimeout(() => {
          scrollToElement(id);
        }, NAVIGATION_DELAY);
      }
    }

    onClick?.();
  };

  return handleClick;
};
