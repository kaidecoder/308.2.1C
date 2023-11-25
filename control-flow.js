//Make a modal to use instead of the alert box: https://youtu.be/q8gv3B3DBoo?si=8rv3M6jJTFErrcwl
const ModalWindow = {
  init() {
    document.body.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal__close")) {
        this.closeModal(e.target);
      }
    });

    this.openModal();
  },

  getHtmlTemplate(modalOptions) {
    return `
            <div class="modal__overlay">
                <div class="modal__window">
                    <div class="modal__titlebar">
                        <span class="modal__title">${modalOptions.title}</span>
                        <button class="modal__close material-icons">close</button>
                    </div>
                    <div class="modal__content">
                        ${modalOptions.content}
                    </div>
                </div>
            </div>
        `;
  },

  openModal(modalOptions = {}) {
    modalOptions = Object.assign(
      {
        title: "Modal Title",
        content: "Modal Content",
      },
      modalOptions,
    );

    const modalTemplate = this.getHtmlTemplate(modalOptions);
    document.body.insertAdjacentHTML("afterbegin", modalTemplate);
  },

  closeModal(closeButton) {
    const modalOverlay = closeButton.parentElement.parentElement.parentElement;
    document.body.removeChild(modalOverlay);
  },
};

document.addEventListener("DOMContentLoaded", () => ModalWindow.init());

//This program is designed for the user to enter any number of weeks.  The 1, 2, 3, weeks I entered were captured and the images are included in my README.md

// Initial Amounts
let PI = 3.1415;
const radius = 5;
let gardenArea = Math.round(PI * radius ** 2);
let plantArea = 0.8;
let initialNumberOfPlants = 20;
let plantRate = 2;
let maximumCapacity = Math.round(gardenArea / plantArea);

//*******  Part II start ********

//   Updated Amounts
let newWeeksOfGrowth = 10;
let newInitialNumberOfPlants = 100;
//time in weeks
let newNumberOfPlants = newInitialNumberOfPlants * 3 ** newWeeksOfGrowth;
//we know how many plants there are in the area, and the area of one plant, we can find the new Garden area
let newGardenArea = newNumberOfPlants * plantArea;
let additionalSpace = newGardenArea - gardenArea;
let newRadius = Math.round(Math.sqrt(newGardenArea / PI));
console.log(Math.round(additionalSpace), "square meters");
console.log(Math.round(newRadius), "meters");
ModalWindow.openModal({
  title: "",
  content: `Thinking Bigger:  
  The amount of additional space required if the area started with 100 plants and wasn't pruned for 10 weeks is ${(
    newGardenArea - gardenArea
  ).toLocaleString(
    "en-US",
  )} square meters. If the space is circular, then the radius of the new garden would be ${Math.round(
    Math.sqrt(newGardenArea / PI),
  ).toLocaleString("en-US")} meters.`,
});

//************ Part II end ************

//********** Part III start **********

//using a try.....catch
try {
  if (gardenArea > newGardenArea) {
    throw Error(
      "Not possible since we started with fewer plants for a smaller radius.",
    );
  } else {
    throw Error("It's hard to beat 4 million plus square meters");
  }
} catch (error) {
  console.log(error.message);
}
ModalWindow.openModal({
  title: "",
  content: `Errors in Judgment:
  try {
    if (gardenArea > newGardenArea) {
      throw Error(
        "Not possible since we started with fewer plants for a smaller radius.",
      );
    } else {
      throw Error("It's hard to beat 4 million plus square meters");
    }
  } catch (error) {
    console.log(error.message);
  }`,
});
//********* Part III end **********

ModalWindow.openModal({
  title: "",
  content: "Deb's Fantastic Garden",
});

ModalWindow.openModal({
  title: "",
  content: `Please be aware that our garden takes up ${Math.round(
    gardenArea,
  )} square meters, our plants each take up 0.8 square meters, and the garden can only hold a maximum of ${Math.round(
    maximumCapacity,
  )} plants.`,
});

ModalWindow.openModal({
  title: "",
  content: `I would like to help you develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.`,
});

let weeksOfGrowth;
//check for 0, undefined, null, an empty string being entered by the user and keep prompting user to enter a number
try {
  while (weeksOfGrowth == null || weeksOfGrowth == "") {
    weeksOfGrowth = Number(
      prompt(
        "Please enter a number for how many weeks the plants have been growing in this Garden:  ",
      ),
    );
    continue;
  }
  let numberOfPlants = Math.round(initialNumberOfPlants * 3 ** weeksOfGrowth);

  ModalWindow.openModal({
    title: "",
    content: `Thank you for entering a valid number.  You entered ${weeksOfGrowth} week(s) ✅.`,
  });
  //separate the code into two sections - either we're greater than or equal to maximum capacity or we are not.  At maximum capacity or greater, we prune
  if (numberOfPlants >= maximumCapacity) {
    ModalWindow.openModal({
      title: "",
      content: `We have ${numberOfPlants} plants after ${weeksOfGrowth} week(s). We have met or exceeded capacity by ${Math.round(
        numberOfPlants - maximumCapacity,
      )} plant(s)!!`,
    });
    prune();
    //Here we're below maximum capacity, so we divide this section into two again.  Either we're more than 50 percent of maximum capacity, or we aren't(plant).  If we are more than 50% capacity, then we do a nested if...then to check if we are also less than 80% capacity. Then we divide that nested if..then into two parts, either we're less that 80%(monitor) or we aren't.
  } else {
    ModalWindow.openModal({
      title: "",
      content: `These plants are below maximum capacity`,
    });

    if (numberOfPlants >= 0.5 * maximumCapacity) {
      if (numberOfPlants <= 0.8 * maximumCapacity) {
        ModalWindow.openModal({
          title: "",
          content: `We have ${numberOfPlants} plants growing at an acceptable rate below 80% and above 50%, inclusive, after ${weeksOfGrowth} week(s).`,
        });
        monitor();
      } else {
        ModalWindow.openModal({
          title: "",
          content: `We have ${Math.round(
            numberOfPlants - 0.8 * maximumCapacity,
          )} plant(s) over 80% of maximum capacity after ${weeksOfGrowth} week(s). No need to prune, monitor, or plant`,
        });
      }
    } else {
      ModalWindow.openModal({
        title: "",
        content: `We have ${numberOfPlants} plants at less than 50% capacity after ${weeksOfGrowth} week(s).`,
      });
      plant();
    }
  }
} catch (error) {
  ModalWindow.openModal({
    title: "",
    content: `error.message`,
  });
}

//function to prune the plants
function prune() {
  return ModalWindow.openModal({
    title: "",
    content: `It is time to prune those plants!!!`,
  });
}

//function to plant
function plant() {
  return ModalWindow.openModal({
    title: "",
    content: `It is time for planting new plants!!!`,
  });
}

//function to monitor the plants
function monitor() {
  return ModalWindow.openModal({
    title: "",
    content: `It is time to monitor the plants!!!`,
  });
}
