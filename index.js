// console.log('mari kita mulai');

let skorPemain = 0
let skorKomp = 0
const displaySkorPemain = document.getElementById('skor-pemain')
const displaySkorKomp = document.getElementById('skor-komputer')
const pilihanBatu = document.getElementById('batu')
const pilihanKertas = document.getElementById('kertas')
const pilihanGunting = document.getElementById('gunting')
const displayHasil = document.getElementById('hasil-game')
const resetSkor = document.getElementById('reset')

resetSkor.addEventListener('click', function() {
    skorPemain = 0;
    skorKomp = 0;
    displaySkorPemain.innerHTML = skorPemain
    displaySkorKomp.innerHTML = skorKomp
})


function komputer() {
    const pilihan = ['Batu', 'Kertas', 'Gunting']
    let number = Math.floor(Math.random() * 3)
    return pilihan[number]
}


function pemain() {
    pilihanBatu.addEventListener('click', function() {
        game('Batu');
    })
    pilihanKertas.addEventListener('click', function() {
        game('Kertas');
    })
    pilihanGunting.addEventListener('click', function() {
        game('Gunting');
    })
}
pemain()

function menang(pilihanPemain, pilihanKomp) {
    skorPemain++
    displaySkorPemain.innerHTML = skorPemain
    displayHasil.innerHTML = `${pilihanPemain} mengalahkan ${pilihanKomp}. ANDA MENANG!!!`
        // console.log('MENANG');
        // console.log(skorPemain, '-', skorKomp);

}

function kalah(pilihanPemain, pilihanKomp) {
    skorKomp++
    displaySkorKomp.innerHTML = skorKomp
    displayHasil.innerHTML = `${pilihanPemain} dikalahkan ${pilihanKomp}. ANDA KALAH!!!`
        // console.log('KALAH');
        // console.log(skorPemain, '-', skorKomp);
}

function seri(pilihanPemain, pilihanKomp) {
    // console.log('SERI');
    displayHasil.innerHTML = `${pilihanKomp} sama ${pilihanPemain}. SERI!!!`
}


function game(pilihanPemain) {
    const pilihanKomp = komputer()
        // console.log('Komputer => ', pilihanKomp, '-', 'Pemain =>', pilihan);
    const hasil = pilihanPemain + pilihanKomp
    switch (hasil) {
        case 'BatuGunting':
        case 'GuntingKertas':
        case 'KertasBatu':
            menang(pilihanPemain, pilihanKomp);
            break;
        case 'BatuKertas':
        case 'KertasGunting':
        case 'GuntingBatu':
            kalah(pilihanPemain, pilihanKomp);
            break;
        case 'BatuBatu':
        case 'KertasKertas':
        case 'GuntingGunting':
            seri(pilihanPemain, pilihanKomp);
            break;
    }
}
game()