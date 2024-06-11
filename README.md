Berikut adalah perbaikan dari README yang Anda berikan:

## Project Test Muhammad Rizky Aziz

Dalam proyek test ini, saya menggunakan framework NextJS dengan bahasa pemrograman JavaScript. Anda dapat melihat hasil proyek ini dengan mengunjungi tautan berikut: [Project Test Muhammad Rizky Aziz](https://project-test-muhammad-rizky-aziz.vercel.app/).

## Ketentuan

Dalam pengerjaan website ini, saya telah memenuhi ketentuan-ketentuan berikut:

1. **Header**

   - **Fixed position**: Ketika pengguna scroll ke bawah, header menghilang, namun ketika pengguna scroll ke atas, header muncul kembali dengan background sedikit transparan (terpenuhi dengan bantuan library GSAP untuk menghandle animasinya).
   - **Active state menu**: Menunjukkan halaman yang sedang dikunjungi (terpenuhi dengan menggunakan `useSelectedLayoutSegment` dari NextJS).

2. **Banner**

   - Banner terdiri dari sebuah gambar yang bisa di-update melalui CMS tanpa perlu mengedit gambar tersebut untuk menambahkan area miring di bagian bawah banner (terpenuhi, gambar pada banner dapat diganti dengan mengubah file pada Firebase Storage).
   - **Efek parallax**: Saat scroll, ada efek parallax antara gambar dan teksnya (ketika laman di-scroll, background banner tetap berada di tempat sedangkan teksnya akan ter-scroll).

3. **List Post**
   - Semua fungsi sort dan show-per-page dapat dijalankan, begitu juga status items yang ditunjukkan dalam satu halaman sesuai urutan item-nya (semua fungsi filter dapat digunakan dengan semestinya).
   - Pilihan sort yang disediakan adalah berdasarkan terbaru dan terlama saja (terpenuhi).
   - Ketika melakukan sort, mengubah show-per-page, dan berpindah halaman kemudian halaman di-refresh, data atau state pada halaman tersebut tidak kembali ke state awal (terpenuhi).
   - Ratio thumbnail harus konsisten di masing-masing cards (terpenuhi dengan rasio 3:2).
   - Pastikan menerapkan lazyloading pada gambar (terpenuhi, tag Image dari NextJS memiliki lazyload ketika dilakukan build).
   - Title post pada card dibatasi tingginya maksimal 3 baris, dan gunakan ellipsis jika ada title yang lebih dari 3 baris (terpenuhi).

## Catatan

- Karena terkendala proxy, thumbnail belum bisa dimuat ke dalam web.
