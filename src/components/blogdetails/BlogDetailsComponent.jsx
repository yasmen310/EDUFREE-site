import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Card } from "react-bootstrap";


const BlogDetailsComponent = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blog.blogs);
  const blog = blogs.find((blog) => blog.id.toString() === id);

  if (!blog) {
    return <p className="text-center my-5">Blog not found!</p>;
  }

  return (
    <div>
      <Container className="my-5">
        <Card className="text-center">
          <Card.Img variant="top" src={blog.image} alt="Blog" style={{height:"300px"}}/>
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>{blog.body}</Card.Text>
          </Card.Body>
        </Card>
    
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <div className="bg-white p-4 rounded shadow-sm">
            <p className="text-muted">
              Sebelum memulai belajar pemrograman, berikut adalah beberapa tips
              untuk sukses dalam perjalanan ini.
            </p>

            <h3 className="fw-bold mt-4">
              1. Pilih bahasa pemrograman yang ingin dipelajari dan kuasai
            </h3>
            <p>
              Langkah pertama dalam belajar pemrograman secara efektif adalah
              menentukan bahasa pemrograman yang ingin dikuasai. Memilih bahasa
              yang tepat dapat membantu memahami dasar-dasar pemrograman dengan
              lebih mudah.
            </p>
            <ul>
              <li>
                Jika tertarik membangun aplikasi berbasis web, maka HTML, CSS,
                dan JavaScript adalah pilihan utama.
              </li>
              <li>
                Untuk pengembangan aplikasi mobile, Java (Android) atau Swift
                (iOS) bisa menjadi pilihan.
              </li>
              <li>
                Jika ingin fokus pada data science, maka Python atau R sangat
                direkomendasikan.
              </li>
            </ul>

            <h3 className="fw-bold mt-4">
              2. Gunakan bantuan modul atau bahan bacaan pemrograman dengan
              tutorial lengkap
            </h3>
            <p>
              Langkah selanjutnya adalah mencari sumber belajar yang tepat.
              Buku, dokumentasi resmi, dan tutorial online dapat sangat membantu
              pemahaman.
            </p>
            <ul>
              <li>
                Gunakan platform seperti W3Schools, MDN, atau FreeCodeCamp untuk
                belajar secara gratis.
              </li>
              <li>
                Baca dokumentasi resmi bahasa pemrograman yang dipilih untuk
                mendapatkan informasi lengkap.
              </li>
              <li>
                Tonton video tutorial di YouTube atau kursus online seperti
                Udemy dan Coursera.
              </li>
            </ul>

            <h3 className="fw-bold mt-4">
              3. Buat dan susun jadwal belajar pemrograman
            </h3>
            <p>
              Konsistensi dalam belajar pemrograman sangat penting. Buatlah
              jadwal belajar yang terstruktur agar proses belajar lebih efektif.
            </p>
            <ul>
              <li>
                Tentukan waktu belajar yang sesuai, misalnya 1-2 jam setiap
                hari.
              </li>
              <li>
                Praktikkan langsung konsep yang telah dipelajari dengan
                mengerjakan proyek kecil.
              </li>
              <li>
                Bergabung dengan komunitas pemrograman untuk mendapatkan
                dukungan dan inspirasi.
              </li>
            </ul>

            <p className="text-muted">
              Dengan mengikuti langkah-langkah di atas, proses belajar
              pemrograman dapat menjadi lebih mudah dan menyenangkan.
            </p>
          </div>
        </div>
      </div>
    </Container>
    </div> 
  );
};

export default BlogDetailsComponent;
