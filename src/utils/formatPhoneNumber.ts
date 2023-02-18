const formatPhoneNumber = (phoneNumber: string | number) => {
  let interPhoneNumber: string | string[] =
    typeof phoneNumber === "number" ? phoneNumber.toString() : phoneNumber;

  if (
    (interPhoneNumber.length !== 11 && !interPhoneNumber.includes("+")) ||
    (interPhoneNumber.length !== 12 && interPhoneNumber.includes("+"))
  )
    return "Error: Wrong phone number";

  interPhoneNumber = interPhoneNumber.split("");

  if (interPhoneNumber[0] === "+") {
    interPhoneNumber = interPhoneNumber.slice(1, interPhoneNumber.length);
  }

  if (interPhoneNumber[0] === "8") {
    interPhoneNumber[0] = "+7";
  }

  interPhoneNumber = [
    "+",
    interPhoneNumber[0],
    " (",
    interPhoneNumber[1],
    interPhoneNumber[2],
    interPhoneNumber[3],
    ") ",
    interPhoneNumber[4],
    interPhoneNumber[5],
    interPhoneNumber[6],
    " ",
    interPhoneNumber[7],
    interPhoneNumber[8],
    " ",
    interPhoneNumber[9],
    interPhoneNumber[10],
  ];

  return interPhoneNumber.join("");
};

export default formatPhoneNumber;
