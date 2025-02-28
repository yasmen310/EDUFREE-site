import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTestimonials } from "../../redux/testimonialSlice";
import image from '../../assets/IMGS/woman-in-collared-shirt-774909.png';

const TestimonialSection = () => {
  const dispatch = useDispatch();
  const { testimonial, loading } = useSelector((state) => state.testimonial);

  React.useEffect(() => {
    dispatch(fetchTestimonials());
  }, [dispatch]);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <h4 className="fw-bold">Kata Mereka Tentang</h4>
            <h4 className="fw-bold">Kursus EDUFREE</h4>
            <p className="text-muted">EDUFREE telah dipercaya lebih dari 10.000 siswa</p>
          </div>
          <div className="col-md-7">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="testimonial">
                <p className="fs-5">"{testimonial.message}"</p>
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={image}
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                    <p className="text-muted mb-0">{testimonial.position}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
