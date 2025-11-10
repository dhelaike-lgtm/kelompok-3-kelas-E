function cekNilai() {
  let skor = 0;

  // kunci jawaban
  const kunci = {
    q6: "c",
    q7: "b",
    q8: "d",
    q9: "d",
    q10: "c",
  }

  // ambil semua jawaban
  const form = document.forms["quizForm"];

  // cek tiap soal
  for (let key in kunci) {
    const jawaban = form[key].value;
    if (jawaban === kunci[key]) {
      skor += 20; // 5 soal, jadi masing-masing 20 poin
    }
  }

  // tampilkan hasil
  document.getElementById("hasil").innerHTML = 
    `Nilai kamu: ${skor} / 100`;
}


