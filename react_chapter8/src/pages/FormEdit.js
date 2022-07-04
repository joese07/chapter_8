function FormEdit() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "50rem" }}>
          <div className="card-body">
            <form method="post" action="/gameuser">
              <div className="mb-3">
                <label for="name" className="form-label">
                  Nama User
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  required
                />
              </div>

              <div className="mb-3">
                <label for="username" className="form-label">
                  User Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  required
                />
              </div>

              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="placeOfBirth" className="form-label">
                  Tempat Lahir
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="placeOfBirth"
                  name="placeOfBirth"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="dateOfBirth" className="form-label">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="address" className="form-label">
                  Alamat
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  min="0"
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="phoneNumber" className="form-label">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  min="0"
                  required
                />
              </div>
              <div className="row">
                <div className="col-auto">
                  <button type="reset" className="btn btn-secondary">
                    Reset
                  </button>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormEdit;
