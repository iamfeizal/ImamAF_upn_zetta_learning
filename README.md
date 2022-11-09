# Quiz

1.  Tulis 2 kasus yang mungkin dilakukan di ngOnInit lifecycle.

    - Saat initialisasi directive (komponen setelah angular pertamakali menampilkan properti data)
    - Mengatur directive (properti input komponen)

2.  Kapan Angular memanggil ngOnInit?

    - Setelah ngOnChanges
    - Tetap dipanggin walaupun tidak terdapat ngOnChanges

3.  Kapan Angular memanggil ngAfterViewInit?
    Setelah ngAfterContentChecked
4.  Kapan Angular memanggil ngOnChange?
    Jika terdapat perubahan input, dipanggil sebelum ngOnInit
5.  Ada skenario di mana Anda memuat ulang halaman yang berisi tabel, paginator, dan daftar yang dapat Anda klik untuk mengubah konten di halaman, lalu Anda mengklik daftar lain. Urutkan kemungkinan LifeCycle Hooks yang dipanggil dalam skenario? <br />
    a. ngOnChanges<br />
    b. ngOnInit<br />
    c. ngDoCheck<br />
    d. ngAfterContentInit<br />
    e. ngAfterContentChecked<br />
    f. ngAfterViewInit<br />
    g. ngAfterViewChecked
