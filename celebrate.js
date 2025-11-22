// window.onload = function () {
//   initCelebration();
// };

// function initCelebration() {
//   gsap.registerPlugin(TextPlugin);
//   const tl = gsap.timeline();
//   const audio = document.getElementById("song");
//   const fwAudio = document.getElementById("fw-audio");
//   const camera = document.getElementById("camera");
//   const text = document.getElementById("overlay-text");
//   const msgBubble = document.getElementById("message-bubble");

//   // --- STARS ---
//   const starBox = document.getElementById("stars-container");
//   for (let i = 0; i < 100; i++) {
//     let s = document.createElement("div");
//     s.className = "star";
//     s.style.width = Math.random() * 3 + "px";
//     s.style.height = s.style.width;
//     s.style.left = Math.random() * 100 + "%";
//     s.style.top = Math.random() * 80 + "%";
//     starBox.appendChild(s);
//   }

//   // --- ANIMATIONS ---
//   function walk(actor, duration) {
//     gsap.to(actor, {
//       y: -5,
//       duration: 0.2,
//       yoyo: true,
//       repeat: duration / 0.2 - 1,
//     });
//     gsap.to(actor.querySelector(".leg.left"), {
//       rotation: 25,
//       duration: 0.3,
//       yoyo: true,
//       repeat: duration / 0.3 - 1,
//     });
//     gsap.to(actor.querySelector(".leg.right"), {
//       rotation: -25,
//       duration: 0.3,
//       yoyo: true,
//       repeat: duration / 0.3 - 1,
//     });
//     gsap.to(actor.querySelector(".arm.left"), {
//       rotation: -20,
//       duration: 0.3,
//       yoyo: true,
//       repeat: duration / 0.3 - 1,
//     });
//     gsap.to(actor.querySelector(".arm.right"), {
//       rotation: 20,
//       duration: 0.3,
//       yoyo: true,
//       repeat: duration / 0.3 - 1,
//     });
//   }
//   function stopWalk(actor) {
//     gsap.killTweensOf(actor);
//     gsap.killTweensOf(actor.querySelectorAll(".leg, .arm"));
//     gsap.to(actor, { y: 0, duration: 0.2 });
//     gsap.to(actor.querySelectorAll(".leg, .arm"), {
//       rotation: 0,
//       duration: 0.5,
//     });
//   }

//   // =========================================
//   // 1. INTRO & SETUP
//   // =========================================
//   tl.to(".moon", { opacity: 1, top: 50, duration: 2 })
//     .to(".house", { right: "50px", duration: 2 }, "<")
//     .to(text, { text: "The Surprise Begins...", opacity: 1, duration: 1.5 })
//     .to(text, { opacity: 0, duration: 0.5, delay: 0.5 })

//     // TRUCK SEQUENCE (MODIFIED: Open Door)
//     .to("#truck", { left: "20%", duration: 2, ease: "power4.out" })
//     .to(".wheel", { rotation: 360, duration: 2, ease: "power4.out" }, "<")

//     // Open Door & Drop
//     .to(".truck-door", { rotationY: -120, duration: 0.5 }) // Door swings open
//     .to("#parcel", {
//       left: "25%",
//       bottom: "15vh",
//       opacity: 1,
//       duration: 0.5,
//       ease: "bounce.out",
//     }) // Slides out
//     .to(".truck-door", { rotationY: 0, duration: 0.5, delay: 0.2 }) // Close door

//     // Truck Leaves
//     .to("#truck", { left: "150%", duration: 1.5, ease: "power2.in" })

//     // House Sequence
//     .to("#parcel", { left: "80%", duration: 2, ease: "power1.inOut" })
//     .to(".door", { scaleX: 0.2, duration: 1 })
//     .to("#parcel", { opacity: 0, scale: 0, duration: 0.5 })
//     .to(".door", { scaleX: 1, duration: 1 })
//     .to(".house", { right: "-300px", duration: 1.5 })

//     // Cake Builds
//     .to("#cake-spot", { opacity: 1, duration: 0.1 })
//     .to("#layer1", {
//       width: 200,
//       height: 50,
//       duration: 0.4,
//       ease: "elastic.out",
//     })
//     .to("#layer2", {
//       width: 150,
//       height: 40,
//       duration: 0.4,
//       ease: "elastic.out",
//     })
//     .to("#layer3", {
//       width: 100,
//       height: 30,
//       duration: 0.4,
//       ease: "elastic.out",
//     })
//     .to(".candle-container", { opacity: 1, bottom: "100%", duration: 0.5 });

//   // =========================================
//   // 2. FAMILY ENTRANCE
//   // =========================================
//   const positions = {
//     nasira: "50%",
//     mom: "20%",
//     dad: "80%",
//     sister: "10%",
//     brother: "90%",
//     friend: "5%",
//   };

//   Object.keys(positions).forEach((name) => {
//     tl.call(() => {
//       const el = document.getElementById(name);
//       walk(el, 3);
//       gsap.to(el, {
//         left: positions[name],
//         xPercent: -50,
//         opacity: 1,
//         duration: 3,
//         ease: "linear",
//         onComplete: () => stopWalk(el),
//       });
//     });
//   });
//   tl.to({}, { duration: 3.5 });

//   // =========================================
//   // 3. LIGHTING
//   // =========================================
//   tl.to(camera, { scale: 2, transformOrigin: "80% 80%", duration: 2 }) // Zoom on Dad
//     .to("#dad .arm.right", { rotation: -60, duration: 0.5 })
//     .to(".flame", { scale: 1, opacity: 1, duration: 0.5, stagger: 0.2 })
//     .to("#dad .arm.right", { rotation: 0, duration: 1 })
//     .to(camera, { scale: 1, duration: 1.5 })
//     .to("#blow-btn", { scale: 1, duration: 0.5, ease: "back.out" });

//   // =========================================
//   // 4. BLOW & CUT
//   // =========================================
//   document.getElementById("blow-btn").addEventListener("click", () => {
//     gsap.to("#blow-btn", { scale: 0, duration: 0.2 });
//     gsap.to(".flame", { scale: 0, opacity: 0, duration: 0.5 });
//     gsap.to(".candle", { height: 0, opacity: 0, duration: 0.5, delay: 0.5 });

//     // Knife Animation
//     const knife = document.querySelector(".knife");
//     gsap.to(knife, {
//       opacity: 1,
//       top: "-20px",
//       right: "50%",
//       xPercent: 50,
//       duration: 1,
//     });
//     gsap.to(knife, { top: "20px", duration: 0.5, yoyo: true, repeat: 2 }); // Cut
//     gsap.to(knife, { opacity: 0, duration: 0.5, delay: 1.5 });

//     // Start Song & Ceremony
//     setTimeout(() => {
//       audio.volume = 1.0;
//       audio.play();
//       startCardCeremony();
//     }, 2500);
//   });

//   // =========================================
//   // 5. CARD CEREMONY (UPDATED MESSAGES)
//   // =========================================
//   function startCardCeremony() {
//     const sequence = [
//       { id: "mom", msg: "My beautiful daughter, you are my world! ❤️" },
//       { id: "dad", msg: "You make us proud every single day." },
//       { id: "sister", msg: "Life is better with you as my sis 🎉" },
//       { id: "brother", msg: "To the smartest person I know, HBD!" },
//       { id: "friend", msg: "Here's to another year of amazing memories!" },
//       { id: "abdul", msg: "Wait for it..." },
//     ];

//     let delay = 0;

//     sequence.forEach((p) => {
//       gsap.delayedCall(delay, () => {
//         const el = document.getElementById(p.id);
//         const originalPos = el.style.left;

//         if (p.id === "abdul") gsap.set(el, { left: "-10%", opacity: 1 });

//         walk(el, 2.5);
//         gsap.to(el, {
//           left: "40%",
//           duration: 2.5,
//           ease: "linear",
//           onComplete: () => {
//             stopWalk(el);

//             if (p.id === "abdul") {
//               showAbdulLetter();
//             } else {
//               msgBubble.innerText = p.msg;
//               gsap.fromTo(
//                 msgBubble,
//                 { opacity: 0, scale: 0 },
//                 {
//                   opacity: 1,
//                   scale: 1,
//                   duration: 0.5,
//                   yoyo: true,
//                   repeat: 1,
//                   repeatDelay: 3,
//                 }
//               );
//             }
//           },
//         });

//         if (p.id !== "abdul") {
//           gsap.delayedCall(5.5, () => {
//             // Wait longer for longer messages
//             walk(el, 2.5);
//             gsap.to(el, {
//               left: originalPos,
//               duration: 2.5,
//               ease: "linear",
//               onComplete: () => stopWalk(el),
//             });
//           });
//         }
//       });
//       delay += 8.5; // Time per person (increased for reading)
//     });
//   }

//   function showAbdulLetter() {
//     const modal = document.getElementById("final-card-modal");
//     modal.style.display = "block";
//     gsap.fromTo(
//       modal,
//       { opacity: 0, scale: 0.5 },
//       { opacity: 1, scale: 1, duration: 1 }
//     );
//   }

//   // =========================================
//   // 6. GRAND FINALE (Quote)
//   // =========================================
//   document
//     .getElementById("start-fireworks-btn")
//     .addEventListener("click", () => {
//       const modal = document.getElementById("final-card-modal");
//       gsap.to(modal, {
//         opacity: 0,
//         scale: 0,
//         duration: 0.5,
//         onComplete: () => (modal.style.display = "none"),
//       });

//       fwAudio.volume = 1.0;
//       fwAudio.play();

//       setInterval(() => {
//         createFirework(
//           Math.random() * window.innerWidth,
//           Math.random() * (window.innerHeight / 2)
//         );
//       }, 400);

//       gsap.to(camera, {
//         keyframes: {
//           "0%": { filter: "hue-rotate(0deg)" },
//           "100%": { filter: "hue-rotate(360deg)" },
//         },
//         duration: 10,
//         repeat: -1,
//         ease: "none",
//       });

//       const greet = document.getElementById("final-greet");
//       greet.style.display = "block";
//       gsap.fromTo(
//         greet,
//         { opacity: 0, scale: 0.5 },
//         { opacity: 1, scale: 1, duration: 2, delay: 1 }
//       );
//     });

//   function createFirework(x, y) {
//     const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
//     for (let i = 0; i < 30; i++) {
//       const p = document.createElement("div");
//       p.className = "firework-particle";
//       p.style.backgroundColor = color;
//       p.style.left = x + "px";
//       p.style.top = y + "px";
//       document.getElementById("camera").appendChild(p);

//       gsap.to(p, {
//         x: (Math.random() - 0.5) * 300,
//         y: (Math.random() - 0.5) * 300,
//         opacity: 0,
//         duration: 1.5,
//         ease: "power2.out",
//         onComplete: () => p.remove(),
//       });
//     }
//   }
// }

window.onload = function () {
  initCelebration();
};

function initCelebration() {
  gsap.registerPlugin(TextPlugin);
  const tl = gsap.timeline();
  const audio = document.getElementById("song");
  const fwAudio = document.getElementById("fw-audio");
  const camera = document.getElementById("camera");
  const text = document.getElementById("overlay-text");
  const msgBubble = document.getElementById("message-bubble");

  // --- STARS ---
  const starBox = document.getElementById("stars-container");
  for (let i = 0; i < 100; i++) {
    let s = document.createElement("div");
    s.className = "star";
    s.style.width = Math.random() * 3 + "px";
    s.style.height = s.style.width;
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 80 + "%";
    starBox.appendChild(s);
  }

  // --- ANIMATIONS ---
  function walk(actor, duration) {
    gsap.to(actor, {
      y: -5,
      duration: 0.2,
      yoyo: true,
      repeat: duration / 0.2 - 1,
    });
    gsap.to(actor.querySelector(".leg.left"), {
      rotation: 25,
      duration: 0.3,
      yoyo: true,
      repeat: duration / 0.3 - 1,
    });
    gsap.to(actor.querySelector(".leg.right"), {
      rotation: -25,
      duration: 0.3,
      yoyo: true,
      repeat: duration / 0.3 - 1,
    });
    gsap.to(actor.querySelector(".arm.left"), {
      rotation: -20,
      duration: 0.3,
      yoyo: true,
      repeat: duration / 0.3 - 1,
    });
    gsap.to(actor.querySelector(".arm.right"), {
      rotation: 20,
      duration: 0.3,
      yoyo: true,
      repeat: duration / 0.3 - 1,
    });
  }
  function stopWalk(actor) {
    gsap.killTweensOf(actor);
    gsap.killTweensOf(actor.querySelectorAll(".leg, .arm"));
    gsap.to(actor, { y: 0, duration: 0.2 });
    gsap.to(actor.querySelectorAll(".leg, .arm"), {
      rotation: 0,
      duration: 0.5,
    });
  }

  // =========================================
  // 1. INTRO & SETUP
  // =========================================
  tl.to(".moon", { opacity: 1, top: 50, duration: 2 })
    .to(".house", { right: "50px", duration: 2 }, "<")
    .to(text, { text: "The Surprise Begins...", opacity: 1, duration: 1.5 })
    .to(text, { opacity: 0, duration: 0.5, delay: 0.5 })

    // TRUCK SEQUENCE (FIXED)
    .to("#truck", { left: "20%", duration: 2, ease: "power4.out" })
    .to(".wheel", { rotation: 360, duration: 2, ease: "power4.out" }, "<")

    // INSTANTLY Move Parcel Inside Truck (Hidden)
    .set("#parcel", { left: "25%", bottom: "70px", opacity: 0 })

    // Open Door
    .to(".truck-door", { rotationY: -120, duration: 0.5 })

    // Drop Parcel (Vertical Drop)
    .to("#parcel", {
      opacity: 1,
      bottom: "15vh",
      duration: 0.6,
      ease: "bounce.out",
    })

    .to(".truck-door", { rotationY: 0, duration: 0.5, delay: 0.2 }) // Close door

    // Truck Leaves
    .to("#truck", { left: "150%", duration: 1.5, ease: "power2.in" })

    // Parcel Moves to House
    .to("#parcel", { left: "80%", duration: 2, ease: "power1.inOut" })
    .to(".door", { scaleX: 0.2, duration: 1 })
    .to("#parcel", { opacity: 0, scale: 0, duration: 0.5 })
    .to(".door", { scaleX: 1, duration: 1 })
    .to(".house", { right: "-300px", duration: 1.5 })

    // Cake Builds
    .to("#cake-spot", { opacity: 1, duration: 0.1 })
    .to("#layer1", {
      width: 200,
      height: 50,
      duration: 0.4,
      ease: "elastic.out",
    })
    .to("#layer2", {
      width: 150,
      height: 40,
      duration: 0.4,
      ease: "elastic.out",
    })
    .to("#layer3", {
      width: 100,
      height: 30,
      duration: 0.4,
      ease: "elastic.out",
    })
    .to(".candle-container", { opacity: 1, bottom: "100%", duration: 0.5 });

  // =========================================
  // 2. FAMILY ENTRANCE (Stay at Sides)
  // =========================================
  const positions = {
    nasira: "50%",
    mom: "20%",
    dad: "80%",
    sister: "10%",
    brother: "90%",
    friend: "5%",
  };

  Object.keys(positions).forEach((name) => {
    tl.call(() => {
      const el = document.getElementById(name);
      walk(el, 3);
      gsap.to(el, {
        left: positions[name],
        xPercent: -50,
        opacity: 1,
        duration: 3,
        ease: "linear",
        onComplete: () => stopWalk(el),
      });
    });
  });
  tl.to({}, { duration: 3.5 });

  // =========================================
  // 3. LIGHTING
  // =========================================
  tl.to(camera, { scale: 2, transformOrigin: "80% 80%", duration: 2 }) // Zoom on Dad
    .to("#dad .arm.right", { rotation: -60, duration: 0.5 })
    .to(".flame", { scale: 1, opacity: 1, duration: 0.5, stagger: 0.2 }) // Lights on
    .to("#dad .arm.right", { rotation: 0, duration: 1 })
    .to(camera, { scale: 1, duration: 1.5 })
    .to("#blow-btn", { scale: 1, duration: 0.5, ease: "back.out" });

  // =========================================
  // 4. BLOW & CUT
  // =========================================
  document.getElementById("blow-btn").addEventListener("click", () => {
    gsap.to("#blow-btn", { scale: 0, duration: 0.2 });
    gsap.to(".flame", { scale: 0, opacity: 0, duration: 0.5 });
    gsap.to(".candle", { height: 0, opacity: 0, duration: 0.5, delay: 0.5 });

    // Knife Animation
    const knife = document.querySelector(".knife");
    gsap.to(knife, {
      opacity: 1,
      top: "-20px",
      right: "50%",
      xPercent: 50,
      duration: 1,
    });
    gsap.to(knife, { top: "20px", duration: 0.5, yoyo: true, repeat: 2 }); // Cut
    gsap.to(knife, { opacity: 0, duration: 0.5, delay: 1.5 });

    // Start Song & Ceremony
    setTimeout(() => {
      audio.volume = 1.0;
      audio.play();
      startCardCeremony();
    }, 2500);
  });

  // =========================================
  // 5. CARD CEREMONY
  // =========================================
  function startCardCeremony() {
    const sequence = [
      { id: "mom", msg: "My beautiful daughter, you are my world! ❤️" },
      { id: "dad", msg: "You make us proud every single day." },
      { id: "sister", msg: "Life is better with you as my sis 🎉" },
      { id: "brother", msg: "To the smartest person I know, HBD!" },
      { id: "friend", msg: "Here's to another year of amazing memories!" },
      { id: "abdul", msg: "Wait for it..." },
    ];

    let delay = 0;

    sequence.forEach((p) => {
      gsap.delayedCall(delay, () => {
        const el = document.getElementById(p.id);
        const originalPos = el.style.left;

        if (p.id === "abdul") gsap.set(el, { left: "-10%", opacity: 1 });

        walk(el, 2.5);
        gsap.to(el, {
          left: "40%",
          duration: 2.5,
          ease: "linear",
          onComplete: () => {
            stopWalk(el);

            if (p.id === "abdul") {
              showAbdulLetter();
            } else {
              msgBubble.innerText = p.msg;
              gsap.fromTo(
                msgBubble,
                { opacity: 0, scale: 0 },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 0.5,
                  yoyo: true,
                  repeat: 1,
                  repeatDelay: 3,
                }
              );
            }
          },
        });

        if (p.id !== "abdul") {
          gsap.delayedCall(5.5, () => {
            walk(el, 2.5);
            gsap.to(el, {
              left: originalPos,
              duration: 2.5,
              ease: "linear",
              onComplete: () => stopWalk(el),
            });
          });
        }
      });
      delay += 8.5;
    });
  }

  function showAbdulLetter() {
    const modal = document.getElementById("final-card-modal");
    modal.style.display = "block";
    gsap.fromTo(
      modal,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1 }
    );
  }

  // =========================================
  // 6. GRAND FINALE
  // =========================================
  document
    .getElementById("start-fireworks-btn")
    .addEventListener("click", () => {
      const modal = document.getElementById("final-card-modal");
      gsap.to(modal, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        onComplete: () => (modal.style.display = "none"),
      });

      fwAudio.volume = 1.0;
      fwAudio.play();

      setInterval(() => {
        createFirework(
          Math.random() * window.innerWidth,
          Math.random() * (window.innerHeight / 2)
        );
      }, 400);

      gsap.to(camera, {
        keyframes: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
        duration: 10,
        repeat: -1,
        ease: "none",
      });

      const greet = document.getElementById("final-greet");
      greet.style.display = "block";
      gsap.fromTo(
        greet,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 2, delay: 1 }
      );
    });

  function createFirework(x, y) {
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      p.className = "firework-particle";
      p.style.backgroundColor = color;
      p.style.left = x + "px";
      p.style.top = y + "px";
      document.getElementById("camera").appendChild(p);

      gsap.to(p, {
        x: (Math.random() - 0.5) * 300,
        y: (Math.random() - 0.5) * 300,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => p.remove(),
      });
    }
  }
}
