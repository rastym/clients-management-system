import React, { useState } from "react";
import { connect } from "react-redux";
import { add_client } from "../../actions/client-actions";

const Main = ({ add_client, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    model: "",
    imei: "",
    repairStart: "",
    description: "",
    active: false,
    wishes: ""
  });

  const onSubmit = e => {
    e.preventDefault();
    add_client(formData, history);
  };

  const onChange = e => {
    console.log(e.target.name + " :" + e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main role="main" className="probootstrap-main js-probootstrap-main">
      <div className="probootstrap-bar">
        <button className="probootstrap-toggle js-probootstrap-toggle">
          <span className="oi oi-menu" />
        </button>
        <div className="probootstrap-main-site-logo">
          <a href="index.html">Aside</a>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-12">
            <div className="row">
              <div className="col-xl-8 col-lg-12 mx-auto">
                <h1 className="mb-3">Додати клієнта</h1>
                <form onSubmit={onSubmit} className="probootstrap-form mb-5">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Ім'я</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="surname">Фамілія</label>
                        <input
                          type="text"
                          className="form-control"
                          id="surname"
                          name="surname"
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Номер телефону</label>
                    <input
                      type="phone"
                      className="form-control"
                      id="phone"
                      name="phone"
                      onChange={onChange}
                    />
                  </div>
                  <h2>Деталі замовлення</h2>
                  <div className="form-group">
                    <label htmlFor="brand">Бренд</label>
                    <input
                      className="form-control"
                      id="brand"
                      name="brand"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="model">Модель</label>
                    <input
                      className="form-control"
                      id="model"
                      name="model"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="imei">Imei</label>
                    <input
                      className="form-control"
                      id="imei"
                      name="imei"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="description">Опис проблеми</label>
                    <textarea
                      cols={25}
                      rows={5}
                      className="form-control"
                      id="description"
                      name="description"
                      defaultValue={""}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="wishes">Додаткові побажання</label>
                    <textarea
                      cols={15}
                      rows={5}
                      className="form-control"
                      id="wishes"
                      name="wishes"
                      defaultValue={""}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <div>
                      <label htmlFor="date">Введіть дату</label>
                    </div>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="repairStart"
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="active-repair"
                      name="active"
                      onChange={onChange}
                    />
                    <label className="form-check-label" htmlFor="active-repair">
                      Активний ремонт
                    </label>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      id="submit"
                      name="submit"
                      value="Надіслати"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    add_client: (formData, history) => dispatch(add_client(formData, history))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
