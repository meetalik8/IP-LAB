const fs = require("fs");

fs.writeFile("newfile.txt", "Hello, to the new file!", (err) => {
  if (err) throw err;
  console.log("File created successfully.");

  fs.readFile("newfile.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("Read data from file:", data);

    fs.writeFile("newfile.txt", "Now the content is updated!", (err) => {
      if (err) throw err;
      console.log("Data written to file successfully.");

      fs.rename("newfile.txt", "newname.txt", (err) => {
        if (err) throw err;
        console.log("File renamed successfully.");

        fs.appendFile("newname.txt", "\nAppending new content.", (err) => {
          if (err) throw err;
          console.log("Data appended to file successfully.");

          fs.readFile("newname.txt", "utf8", (err, newData) => {
            if (err) throw err;
            console.log("Updated content of the file:", newData);

            fs.unlink("newname.txt", (err) => {
              if (err) throw err;
              console.log("File deleted successfully.");
            });
          });
        });
      });
    });
  });
});
