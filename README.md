# API Data Sekolah Indonesia
**Repository**: [arv-fazriansyah/api-data-sekolah-indonesia](https://github.com/arv-fazriansyah/api-data-sekolah-indonesia)

## Deskripsi

API publik untuk mendapatkan data satuan pendidikan (SD, SMP, SMA, SMK, dan lainnya) di seluruh Indonesia berdasarkan Dapodik (Data Pokok Pendidikan). Cari berdasarkan NPSN dan dapatkan informasi lengkap dan terbaru dalam format JSON.

---

## Endpoints

### 🌐 Dynamic API Endpoint

* **Via Vercel Serverless API**
  Dapatkan data sekolah berdasarkan **NPSN** atau **Keyword/Nama Sekolah** secara fleksibel:

  ```
  https://api-data-sekolah-indonesia.vercel.app/api/sekolah?npsn=20326575
  ```

  **Parameter:**

  * `npsn` (opsional): Nomor Pokok Satuan Pendidikan Nasional
  * `keyword` (opsional): Kata kunci / nama sekolah yang dicari

  **Contoh:**

  ```bash
  curl -s 'https://api-data-sekolah-indonesia.vercel.app/api/sekolah?npsn=20326575' | jq
  ```

  **Respon JSON:**

  ```json
  {
    "id": "00036b5a-2df5-e011-8efc-c9d8e662fb1c",
    "npsn": "20326575",
    "name": "SMP NEGERI 1 BREBES"
  }
  ```

---

## Penggunaan

### JavaScript (fetch)

```js
fetch('https://api-data-sekolah-indonesia.vercel.app/api/sekolah?npsn=20326575')
  .then(res => res.json())
  .then(data => console.log(data));
```

### Dengan `curl`

```bash
curl -s 'https://api-data-sekolah-indonesia.vercel.app/api/sekolah?npsn=20326575' | jq
```

---

## Hosting & Cache

* Cepat dan ringan melalui **Vercel Serverless Function**
* Terhubung langsung ke sumber data resmi secara aman via server-side proxy

---

## Lisensi

Data ini dirilis di bawah [MIT License](LICENSE).
Bebas digunakan untuk keperluan **pribadi, komersial, pendidikan**, atau integrasi ke dalam sistem lain.

---
