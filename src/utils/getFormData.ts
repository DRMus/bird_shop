function getBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result as string);
    };
    reader.onerror = function (error) {
      console.log(error);
    };
  });
}

export default (element: any): Promise<FormData> => {
  return new Promise<FormData>((resolve, reject) => {
    let formData = new FormData();
    let image: File | null = null;
    
    Array.from(element.target.elements as HTMLInputElement[]).forEach((item: HTMLInputElement) => {
      if (item.name === "image" && item.files) {
        image = item.files[0];
      } else if (item.name) {
        formData.append(item.name, item.value);
      }
    });

    if (image) {
      getBase64(image).then((resp) => {
        formData.append("image", resp);
        resolve(formData);
      });
    } else {
      resolve(formData);
    }
  });
};
