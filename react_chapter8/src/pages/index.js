import Header from "../components/header";
import FormEdit from "./FormEdit";
import FormInput from "./FormInput";
import { useState } from "react";

function Index() {
  const [namaUser, setNamaUser] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  console.log(
    namaUser +
      userName +
      password +
      placeOfBirth +
      dateOfBirth +
      email +
      address +
      phoneNumber
  );
  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="m-0">Data Player</h3>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form>
        </div>
        <div
          className="modal fade"
          id="formInput"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Input Data Player Baru
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <FormInput
                  setUserName={setUserName}
                  setNamaUser={setNamaUser}
                  setPassword={setPassword}
                  setPlaceOfBirth={setPlaceOfBirth}
                  setDateOfBirth={setDateOfBirth}
                  setEmail={setEmail}
                  setAddress={setAddress}
                  setPhoneNumber={setPhoneNumber}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="formEdit"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Data Player
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <FormEdit />
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive mt-3">
          <table className="table table-striped table-hover">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th scope="col">No</th>
                <th scope="col">Nama User</th>
                <th scope="col">ID user</th>
                <th scope="col">Email</th>
                <th scope="col">No Telepon</th>
                <th scope="col">Tempat Lahir</th>
                <th scope="col">Tanggal Lahir</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ textAlign: "center" }}>
                <th scope="row">1</th>

                <td className="w-25">{namaUser}</td>
                <td className="w-25">L0098</td>
                <td>{email}</td>
                <td>{phoneNumber}</td>
                <td className="w-25">{placeOfBirth}</td>
                <td className="w-25">{dateOfBirth}</td>
                <td>
                  <div className="d-flex gap-2 text-nowrap">
                    <a
                      className="btn btn-success btn-sm"
                      href="/detail/:id"
                      role="button"
                    >
                      <i className="bi-eye-fill" /> Lihat Detail
                    </a>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#formEdit"
                      data-bs-whatever="@mdo"
                    >
                      Edit
                    </button>

                    <form method="post" action="/:id/?_method=DELETE">
                      <button
                        className="btn btn-danger btn-sm"
                        type="submit"
                        onclick="return confirm('apakah anda yakin hapus data ?');"
                      >
                        <i className="bi-trash-fill" /> Hapus
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#formInput"
          data-bs-whatever="@mdo"
        >
          Buat Player Baru
        </button>
      </div>
    </>
  );
}
export default Index;
