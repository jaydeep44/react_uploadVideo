import axios from "axios";
import React from "react";
import { BACKEND_URI } from "../config/constants";
// var FileSaver = require('file-saver');
import FileSaver from "file-saver";

const getNameOfFile = (path) => {
  const splittedPath = path.split("/");

  return splittedPath[splittedPath.length - 1];
};

const UploadsList = ({ medias }) => {
  const onDelete = (id) => {
    axios
      .delete(`${BACKEND_URI}/api/v1/media/all/delete/${id}`)
      .then((success) => {
        // alert("Submitted successfully");
        window.location.reload()
      })
      .catch((error) => {
        console.log(error);
        alert("Error happened!");
      });
    console.log(id, "iddddddd");
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th width="200">Name</th>
              <th>Videos</th>
            </tr>
          </thead>
          <tbody>
            {medias &&
              medias.map((media) => {
                return (
                  <tr>
                    <td>{media.name}</td>
                    <td>
                      {media.videos.map((video) => {
                        return (
                          <>
                            <video
                              preload="auto"
                              width="320"
                              height="240"
                              controls
                            >
                              <source src={`${BACKEND_URI}${video}`} />
                              ;Your browser does not support the video tag.
                            </video>
                            <br />
                            <button
                              className="btn btn-primary"
                              onClick={() =>
                                FileSaver.saveAs(
                                  `${BACKEND_URI}${video}`,
                                  getNameOfFile(video)
                                )
                              }
                            >
                              Download
                            </button>
                            <br></br>
                            <button onClick={() => onDelete(media._id)}>
                              Delete
                            </button>
                          </>
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadsList;
