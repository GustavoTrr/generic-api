const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/*', (request, response) => {
  const requestedPath = request.url.substr(1);
  const filePath = `./json_files/${requestedPath}.json`;

  fs.exists(filePath, exists => {
    if (!exists) {
      return response.status(404).send('Not Found');
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return response.status(500).send('Internal Server Error');
      }

      response.send(JSON.parse(data));
    });
  });
});

app.post('*', (request, response) => {

  const requestedPath = request.path.substring(1);

  const filePath = `./json_files/${requestedPath}.json`;
  const fileDirPath = path.dirname(filePath);

  fs.mkdir(fileDirPath, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ message: 'An error occurred while creating the directories' });
    }

    fs.writeFile(filePath, JSON.stringify(request.body), (err) => {
      if (err) {
        console.error(err);
        response.status(500).send({ error: 'Failed to write file' });
      } else {
        response.status(201).send({ message: 'File created successfully' });
      }
    });
  });
});

app.put('*', (request, response) => {
  const requestedPath = request.path.substring(1);
  const filePath = `./json_files/${requestedPath}.json`;

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(err);
      response.status(404).send({ error: 'File not found' });
      // Unccomment the lines below and comment the two lines above if you want to try create the file as the entity sent
      // fs.writeFile(path, JSON.stringify(data), (err) => {
      //   if (err) {
      //     res.status(500).send({
      //       error: 'Error while saving the data',
      //     });
      //   } else {
      //     res.send({
      //       message: 'Data saved successfully',
      //     });
      //   }
      // });
    } else {
      fs.writeFile(filePath, JSON.stringify(request.body), (err) => {
        if (err) {
          console.error(err);
          response.status(500).send({ error: 'Failed to update file' });
        } else {
          response.status(200).send({ message: 'File updated successfully' });
        }
      });
    }
  });
});

app.patch('*', (request, response) => {
  const requestedPath = request.path.substring(1);
  const filePath = `./json_files/${requestedPath}.json`;

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(err);
      response.status(404).send({ error: 'File not found' });
    } else {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          console.error(err);
          response.status(500).send({ error: 'Failed to read file' });
        } else {
          let fileData = JSON.parse(data);
          fileData = { ...fileData, ...request.body };
          fs.writeFile(filePath, JSON.stringify(fileData), (err) => {
            if (err) {
              console.error(err);
              response.status(500).send({ error: 'Failed to update file' });
            } else {
              response.status(200).send({ message: 'File updated successfully' });
            }
          });
        }
      });
    }
  });
});

app.delete('/*', (request, response) => {
  const requestedPath = request.path.substring(1);
  const filePath = `./json_files/${requestedPath}.json`;
  fs.unlink(filePath, (err) => {
    if (err) {
      response.status(404).send('File not found');
    } else {
      response.send('File deleted successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`JSON server listening on port ${PORT}`);
});