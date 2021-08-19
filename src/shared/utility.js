export const checkedSelectValue = (value) => {
     if (value === "0") {
          return true;
     } else {
          return false;
     }
};

export const checkedInputLength = (value) => {
     if (value.length === 0) {
          return true;
     } else {
          return false;
     }
};

export const checkedFullName = (value) => {
     if (value.length > 2 && value.length !== 0) {
          return false;
     } else {
          return true;
     }
};

export const checkedPhoneNumber = (value) => {
     var pattern = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
     if (value.match(pattern) && value.length !== 0) {
          return false;
     } else {
          return true;
     }
};
