// Fungsi untuk mengubah gambar berdasarkan jenis kelamin yang dipilih
function updateGenderImage() {
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let imageElement = document.getElementById('image');
    
    if (gender === 'pria') {
        imageElement.src = 'images/pria.png'; // Gambar pria
        imageElement.alt = 'Gambar Pria';
    } else {
        imageElement.src = 'images/wanita.png'; // Gambar wanita
        imageElement.alt = 'Gambar Wanita';
    }
}

// Event listener untuk memperbarui gambar saat radio button berubah
document.querySelectorAll('input[name="gender"]').forEach(input => {
    input.addEventListener('change', updateGenderImage);
});

// Event listener untuk menghitung BMI
document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let height = parseFloat(document.getElementById('height').value) / 100;
    let weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Masukkan tinggi dan berat badan yang valid.');
        return;
    }

    let bmi = weight / (height * height);
    let category = '';
    let infoText = "";

    if (bmi < 18.5) {
        category = 'Kekurangan Berat Badan';
        infoText = 'Anda memiliki berat badan di bawah normal. Disarankan untuk meningkatkan asupan nutrisi dan konsultasi dengan ahli gizi.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal (Ideal)';
        infoText = 'Berat badan Anda berada dalam kisaran normal. Pertahankan pola makan sehat dan rutin berolahraga.';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Kelebihan Berat Badan';
        infoText = 'Anda memiliki berat badan berlebih. Disarankan untuk mengatur pola makan dan meningkatkan aktivitas fisik.';
    } else {
        category = 'Obesitas';
        infoText = 'Anda berada dalam kategori obesitas. Konsultasikan dengan dokter untuk program penurunan berat badan yang sesuai.';
    }

    document.getElementById('bmiValue').innerText = `BMI Anda: ${bmi.toFixed(1)}`;
    document.getElementById('bmiCategory').innerText = `Kategori: ${category}`;
    document.getElementById('bmiDescription').innerText = infoText;
    
    // Memastikan elemen hasil muncul
    document.getElementById('result').classList.remove('hidden');
});

// Reset form
document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').classList.add('hidden');
});
