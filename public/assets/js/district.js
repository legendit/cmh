function district() {
    var division = document.getElementById('select_division').value;
    switch (division) {
        case 'Dhaka':
            var district_list = "<option disabled selected>Select Your District</option><option value='Dhaka'>Dhaka</option><option value='Faridpur'>Faridpur</option> <option value='Gazipur'>Gazipur</option><option value='Gopalganj'>Gopalganj</option> <option value='Kishoreganj'>Kishoreganj</option><option value='Madaripur'>Madaripur</option><option value='Manikganj'>Manikganj</option><option value='Munshiganj'>Munshiganj</option><option value='Narayanganj'>Narayanganj</option><option value='Narshingdi'>Narshingdi</option>  <option value='Narshingdi'>Narshingdi</option><option value='Rajbari'>Rajbari</option>   <option value='Shariatpur'>Shariatpur</option><option value='Tangail'>Tangail</option>";
            break; 
        case 'Chittagong':
            var district_list = "<option disabled selected>Select Your District</option><option value='Bandarban'>Bandarban</option><option value='Brahmanbaria'>Brahmanbaria</option><option value='Chandpur'>Chandpur</option><option value='Chittagong'>Chittagong</option><option value='Comilla'>Comilla</option><option value='Coxs Bazar'>Coxs Bazar</option><option value='Feni'>Feni</option><option value='Khagrachari'>Khagrachari</option><option value='Lakshmipur'>Lakshmipur</option><option value='Noakhali'>Noakhali</option><option value='Rangamati'>Rangamati</option>";
            break;
        case 'Khulna':
            var district_list = "<option disabled selected>Select Your District</option><option value='Bagherhat'>Bagherhat</option><option value='Chuadanga'>Chuadanga</option><option value='Jessore'>Jessore</option><option value='Jinaidaha'>Jinaidaha</option><option value='Khulna'>Khulna</option><option value='Kustia'>Kustia</option><option value='Magura'>Magura</option><option value='Meherpur'>Meherpur</option><option value='Narail'>Narail</option><option value='Satkhira'>Satkhira</option>";
            break;
        case 'Sylhet':
            var district_list = "<option disabled selected>Select Your District</option><option value='Hobiganj'>Hobiganj</option><option value='Moulvibazar'>Moulvibazar</option><option value='Sunamganj'>Sunamganj</option><option value='Sylhet'>Sylhet</option>";
            break;
        case 'Barisal':
            var district_list = "<option disabled selected>Select Your District</option><option value='Barguna'>Barguna</option><option value='Barishal'>Barishal</option><option value='Bhola'>Bhola</option><option value='Jhalokathi'>Jhalokathi</option><option value='Patuakhali'>Patuakhali</option><option value='Pirojpur'>Pirojpur</option>";
            break;
        case 'Rangpur':
            var district_list = "<option disabled selected>Select Your District</option><option value='Dinajpur'>Dinajpur</option><option value='Gaibandha'>Gaibandha</option><option value='Kurigram'>Kurigram</option><option value='Lalmonirhat'>Lalmonirhat</option><option value='Nilphamari'>Nilphamari</option><option value='Panchagarh'>Panchagarh</option><option value='Rangpur'>Rangpur</option><option value='Thakurgaon'>Thakurgaon</option>";
            break;
        case 'Rajshahi':
            var district_list = "<option disabled selected>Select Your District</option><option value='Bogra'>Bogra</option><option value='Chapinawabganj'>Chapinawabganj</option><option value='Joypurhat'>Joypurhat</option><option value='Naogaon'>Naogaon</option><option value='Natore'>Natore</option><option value='Pabna'>Pabna</option><option value='Rajshahi'>Rajshahi</option><option value='Sirajganj'>Sirajganj</option>";
            break;
        case 'Mymensingh':
            var district_list = "<option disabled selected>Select Your District</option><option value='Jamalpur'>Jamalpur</option><option value='Mymensingh'>Mymensingh</option><option value='Netrakona'>Netrakona</option><option value='Sherpur'>Sherpur</option>";
            break;
    }
    document.getElementById('select_district').innerHTML = district_list;
}; 

function upazila() {
    var dist = document.getElementById('select_district').value;
    switch (dist) {
        case 'Dhaka':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Dhamrai'>Dhamrai</option><option value='Dohar'>Dohar</option><option value='Keraniganj'>Keraniganj</option><option value='Nawabganj'>Nawabganj</option><option value='Savar'>Savar</option>";
            break;
        case 'Faridpur':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Faridpur Sadar'>Faridpur Sadar</option><option value='Boalmari'>Boalmari</option><option value='Alfadanga'>Alfadanga</option><option value='Madhukhali'>Madhukhali</option><option value='Bhanga'>Bhanga</option><option value='Nagarkanda'>Nagarkanda</option><option value='Charbhadrasan'>Charbhadrasan</option><option value='Sadarpur'>Sadarpur</option><option value='Shaltha'>Shaltha</option>";
            break;
        case 'Gazipur':
            var upazila_list = "<option disabled selected>Select Your Upazila</option> <option value='Gazipur Sadar-Joydebpur'>Gazipur Sadar-Joydebpur</option><option value='Kaliakior'>Kaliakior</option><option value='Kapasia'>Kapasia</option><option value='Sripur'>Sripur</option><option value='Kaliganj'>Kaliganj</option><option value='Tongi'>Tongi</option>";
            break;
        case 'Gopalganj':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Gopalganj Sadar'>Gopalganj Sadar</option><option value='Kashiani'>Kashiani</option><option value='Kotalipara'>Kotalipara</option><option value='Muksudpur'>Muksudpur</option><option value='Tungipara'>Tungipara</option>";
            break;
        case 'Kishoreganj':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Astagram'>Astagram</option><option value='Bajitpur'>Bajitpur</option><option value='Bhairab'>Bhairab</option><option value='Hossainpur'>Hossainpur</option><option value='Itna'>Itna</option><option value='Karimganj'>Karimganj</option><option value='Katiadi'>Katiadi</option><option value='Kishoreganj Sadar'>Kishoreganj Sadar</option><option value='Kuliarchar'>Kuliarchar</option><option value='Mithamain'>Mithamain</option><option value='Nikli'>Nikli</option><option value='Pakundia'>Pakundia</option><option value='Tarail'>Tarail</option>";
            break;
        case 'Madaripur':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Madaripur Sadar'>Madaripur Sadar</option><option value='Kalkini'>Kalkini</option><option value='Rajoir'>Rajoir</option><option value='Shibchar'>Shibchar</option>";
            break;
        case 'Manikganj':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Manikganj Sadar'>Manikganj Sadar</option><option value='Singair'>Singair</option><option value='Shibalaya'>Shibalaya</option><option value='Saturia'>Saturia</option><option value='Harirampur'>Harirampur</option><option value='Ghior'>Ghior</option><option value='Daulatpur'>Daulatpur</option>";
            break;
        case 'Munshiganj':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Lohajang'>Lohajang</option><option value='Sreenagar'>Sreenagar</option><option value='Munshiganj Sadar'>Munshiganj Sadar</option><option value='Sirajdikhan'>Sirajdikhan</option><option value='Tongibari'>Tongibari</option><option value='Gazaria'>Gazaria</option>";
            break;
        case 'Narayanganj':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Araihazar'>Araihazar</option><option value='Sonargaon'>Sonargaon</option><option value='Bandar'>Bandar</option><option value='Naryanganj Sadar'>Naryanganj Sadar</option><option value='Rupganj'>Rupganj</option><option value='Siddirgonj'>Siddirgonj</option>";
            break;
        case 'Narshingdi':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Belabo'>Belabo</option><option value='Monohardi'>Monohardi</option><option value='Narsingdi Sadar'>Narsingdi Sadar</option><option value='Palash'>Palash</option><option value='Raipura, Narsingdi'>Raipura, Narsingdi</option><option value='Shibpur'>Shibpur</option>";
            break;
        case 'Rajbari':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Baliakandi'>Baliakandi</option><option value='Goalandaghat'>Goalandaghat</option><option value='Pangsha'>Pangsha</option><option value='Kalukhali'>Kalukhali</option><option value='Rajbari Sadar'>Rajbari Sadar</option> ";
            break;
        case 'Shariatpur':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Shariatpur Sadar -Palong'>Shariatpur Sadar -Palong</option><option value='Damudya'>Damudya</option><option value='Naria'>Naria</option><option value='Jajira'>Jajira</option><option value='Bhedarganj'>Bhedarganj</option><option value='Gosairhat'>Gosairhat</option> ";
            break;
        case 'Tangail':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Tangail Sadar'>Tangail Sadar</option><option value='Sakhipur'>Sakhipur</option><option value='Basail'>Basail</option><option value='Madhupur'>Madhupur</option><option value='Ghatail'>Ghatail</option><option value='Kalihati'>Kalihati</option><option value='Nagarpur'>Nagarpur</option><option value='Mirzapur'>Mirzapur</option><option value='Gopalpur'>Gopalpur</option><option value='Delduar'>Delduar</option><option value='Bhuapur'>Bhuapur</option><option value='Dhanbari'>Dhanbari</option>";
            break;
        case 'Bandarban':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Bandarban Sadar'>Bandarban Sadar</option><option value='Thanchi'>Thanchi</option><option value='Lama'>Lama</option><option value='Naikhongchhari'>Naikhongchhari</option><option value='Ali kadam'>Ali kadam</option><option value='Rowangchhari'>Rowangchhari</option><option value='Ruma'>Ruma</option>";
            break;
        case 'Brahmanbaria':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Brahmanbaria Sadar'>Brahmanbaria Sadar</option><option value='Ashuganj'>Ashuganj</option><option value='Nasirnagar'>Nasirnagar</option><option value='Nabinagar'>Nabinagar</option><option value='Sarail'>Sarail</option><option value='Shahbazpur Town'>Shahbazpur Town</option><option value='Kasba'>Kasba</option><option value='Akhaura'>Akhaura</option><option value='Bancharampur'>Bancharampur</option><option value='Bijoynagar'>Bijoynagar</option>";
            break;
        case 'Chandpur':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Chandpur Sadar'>Chandpur Sadar</option><option value='Faridganj'>Faridganj</option><option value='Haimchar'>Haimchar</option><option value='Haziganj'>Haziganj</option><option value='Kachua'>Kachua</option><option value='Matlab Uttar'>Matlab Uttar</option><option value='Matlab Dakkhin'>Matlab Dakkhin</option><option value='Shahrasti'>Shahrasti</option>";
            break;
        case 'Chittagong':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Anwara'>Anwara</option><option value='Banshkhali'>Banshkhali</option><option value='Boalkhali'>Boalkhali</option><option value='Chandanaish'>Chandanaish</option><option value='Fatikchhari'>Fatikchhari</option><option value='Hathazari'>Hathazari</option><option value='Lohagara'>Lohagara</option><option value='Mirsharai'>Mirsharai</option><option value='Patiya'>Patiya</option><option value='Rangunia'>Rangunia</option><option value='Raozan'>Raozan</option><option value='Sandwip'>Sandwip</option><option value='Satkania'>Satkania</option><option value='Sitakunda'>Sitakunda</option> ";
            break;
        case 'Comilla':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Barura'>Barura</option><option value='Brahmanpara'>Brahmanpara</option><option value='Burichong'>Burichong</option><option value='Chandina'>Chandina</option><option value='Chauddagram'>Chauddagram</option><option value='Daudkandi'>Daudkandi</option><option value='Debidwar'>Debidwar</option><option value='Homna'>Homna</option><option value='Comilla Sadar'>Comilla Sadar</option><option value='Laksam'>Laksam</option><option value='Monohorgonj'>Monohorgonj</option><option value='Meghna'>Meghna</option><option value='Muradnagar'>Muradnagar</option><option value='Nangalkot'>Nangalkot</option><option value='Comilla Sadar South'>Comilla Sadar South</option><option value='Titas'>Titas</option>";
            break;
        case 'Coxs Bazar':
            var upazila_list = "<option disabled selected>Select Your Upazila</option> <option value='Chakaria'>Chakaria</option><option value='Cox's Bazar Sadar'>Cox's Bazar Sadar</option><option value='Kutubdia'>Kutubdia</option><option value='Maheshkhali'>Maheshkhali</option><option value='Ramu'>Ramu</option><option value='Teknaf'>Teknaf</option><option value='Ukhia'>Ukhia</option><option value='Pekua'>Pekua</option>";
            break;
        case 'Feni':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Feni Sadar'>Feni Sadar</option><option value='Chagalnaiya'>Chagalnaiya</option><option value='Daganbhyan'>Daganbhyan</option><option value='Parshuram'>Parshuram</option><option value='Fhulgazi'>Fhulgazi</option><option value='Sonagazi'>Sonagazi</option>";
            break;
        case 'Khagrachari':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Dighinala'>Dighinala</option><option value='Khagrachhari'>Khagrachhari</option><option value='Lakshmichhari'>Lakshmichhari</option><option value='Mahalchhari'>Mahalchhari</option><option value='Manikchhari'>Manikchhari</option><option value='Matiranga'>Matiranga</option><option value='Panchhari'>Panchhari</option><option value='Ramgarh'>Ramgarh</option>";
            break;
        case 'Lakshmipur':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Lakshmipur Sadar'>Lakshmipur Sadar</option><option value='Raipur'>Raipur</option><option value='Ramganj'>Ramganj</option><option value='Ramgati'>Ramgati</option><option value='Komol Nagar'>Komol Nagar</option>";
            break;
        case 'Noakhali':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Noakhali Sadar'>Noakhali Sadar</option><option value='Begumganj'>Begumganj</option><option value='Chatkhil'>Chatkhil</option><option value='Companyganj'>Companyganj</option><option value='Shenbag'>Shenbag</option><option value='Hatia'>Hatia</option><option value='Kobirhat'>Kobirhat</option><option value='Sonaimuri'>Sonaimuri</option><option value='Suborno Char'>Suborno Char</option> ";
            break;
        case 'Rangamati':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Rangamati Sadar'>Rangamati Sadar</option><option value='Belaichhari'>Belaichhari</option><option value='Bagaichhari'>Bagaichhari</option><option value='Barkal'>Barkal</option><option value='Juraichhari'>Juraichhari</option><option value='Rajasthali'>Rajasthali</option><option value='Kaptai'>Kaptai</option><option value='Langadu'>Langadu</option><option value='Nannerchar'>Nannerchar</option><option value='Kaukhali'>Kaukhali</option>";
            break;
        case 'Bagherhat':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Bagerhat Sadar'>Bagerhat Sadar</option><option value='Chitalmari'>Chitalmari</option><option value='Fakirhat'>Fakirhat</option><option value='Kachua'>Kachua</option><option value='Mollahat'>Mollahat</option><option value='Mongla'>Mongla</option><option value='Morrelganj'>Morrelganj</option><option value='Rampal'>Rampal</option><option value='Sarankhola'>Sarankhola</option>";
            break;
        case 'Chuadanga':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Damurhuda'>Damurhuda</option><option value='Chuadanga-S'>Chuadanga-S</option><option value='Jibannagar'>Jibannagar</option><option value='Alamdanga'>Alamdanga</option>";
            break;
        case 'Jessore':
            var upazila_list = "<option disabled selected>Select Your Upazila</option> <option value='Abhaynagar'>Abhaynagar</option><option value='Keshabpur'>Keshabpur</option><option value='Bagherpara'>Bagherpara</option><option value='Jessore Sadar'>Jessore Sadar</option><option value='Chaugachha'>Chaugachha</option><option value='Manirampur'>Manirampur</option><option value='Jhikargachha'>Jhikargachha</option><option value='Sharsha'>Sharsha</option> ";
            break;
        case 'Jinaidaha':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Jhenaidah Sadar'>Jhenaidah Sadar</option><option value='Maheshpur'>Maheshpur</option><option value='Kaliganj'>Kaliganj</option><option value='Kotchandpur'>Kotchandpur</option><option value='Shailkupa'>Shailkupa</option><option value='Harinakunda'>Harinakunda</option>";
            break;
        case 'Khulna':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Terokhada'>Terokhada</option><option value='Batiaghata'>Batiaghata</option><option value='Dacope'>Dacope</option><option value='Dumuria'>Dumuria</option><option value='Dighalia'>Dighalia</option><option value='Koyra'>Koyra</option><option value='Paikgachha'>Paikgachha</option><option value='Phultala'>Phultala</option><option value='Rupsa'>Rupsa</option> ";
            break;
        case 'Kustia':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Kushtia Sadar'>Kushtia Sadar</option><option value='Kumarkhali'>Kumarkhali</option><option value='Daulatpur'>Daulatpur</option><option value='Mirpur'>Mirpur</option><option value='Bheramara'>Bheramara</option><option value='Khoksa'>Khoksa</option>";
            break;
        case 'Magura':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Magura Sadar'>Magura Sadar</option><option value='Mohammadpur'>Mohammadpur</option><option value='Shalikha'>Shalikha</option><option value='Sreepur'>Sreepur</option>";
            break;
        case 'Meherpur':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Gangni'>angni</option><option value='Mujib Nagar'>Mujib Nagar</option><option value='Meherpur-S'>Meherpur-S</option>";
            break;
        case 'Narail':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Narail Sadar'>Narail Sadar</option><option value='Lohagara'>Lohagara</option><option value='Kalia'>Kalia</option>";
            break;
        case 'Satkhira':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Satkhira Sadar'>Satkhira Sadar</option><option value='Assasuni'>Assasuni</option><option value='Debhata'>Debhata</option><option value='Tala'>Tala</option><option value='Kalaroa'>Kalaroa</option><option value='Kaliganj'>Kaliganj</option><option value='Shyamnagar'>Shyamnagar</option>";
            break;
        case 'Hobiganj':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Ajmiriganj'>Ajmiriganj</option><option value='Baniachang'>Baniachang</option><option value='Bahubal'>Bahubal</option><option value='Chunarughat'>Chunarughat</option><option value='Habiganj Sadar'>Habiganj Sadar</option><option value='Lakhai'>Lakhai</option><option value='Madhabpur'>Madhabpur</option><option value='Nabiganj'>Nabiganj</option><option value='Shaistagonj'>Shaistagonj</option>";
            break;
        case 'Moulvibazar':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Moulvibazar Sadar'>Moulvibazar Sadar</option><option value='Barlekha'>Barlekha</option><option value='Juri'>Juri</option><option value='Kamalganj'>Kamalganj</option><option value='Kulaura'>Kulaura</option><option value='Rajnagar'>Rajnagar</option><option value='Sreemangal'>Sreemangal</option>";
            break;
        case 'Sunamganj':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Bishwamvarpur'>Bishwamvarpur</option><option value='Chhatak'>Chhatak</option><option value='Derai'>Derai</option><option value='Dharampasha'>Dharampasha</option><option value='Dowarabazar'>Dowarabazar</option><option value='Jagannathpur'>Jagannathpur</option><option value='Jamalganj'>Jamalganj</option><option value='Sulla'>Sulla</option><option value='Sunamganj Sadar'>Sunamganj Sadar</option><option value='Shanthiganj'>Shanthiganj</option><option value='Tahirpur'>Tahirpur</option>";
            break;
        case 'Sylhet':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Sylhet Sadar'>Sylhet Sadar</option><option value='Beanibazar'>Beanibazar</option><option value='Bishwanath'>Bishwanath</option><option value='Dakshin Surma'>Dakshin Surma</option><option value='Balaganj'>Balaganj</option><option value='Companiganj'>Companiganj</option><option value='Fenchuganj'>Fenchuganj</option><option value='Golapganj'>Golapganj</option><option value='Gowainghat'>Gowainghat</option><option value='Jaintiapur'>Jaintiapur</option><option value='Kanaighat'>Kanaighat</option><option value='Zakiganj'>Zakiganj</option><option value='Nobigonj'>Nobigonj</option>";
            break;
        case 'Barguna':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Amtali'>Amtali</option><option value='Bamna'>Bamna</option><option value='Barguna Sadar'>Barguna Sadar</option><option value='Betagi'>Betagi</option><option value='Patharghata'>Patharghata</option><option value='Taltali'>Taltali</option>";
            break;
        case 'Barishal':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Muladi'>Muladi</option><option value='Babuganj'>Babuganj</option><option value='Agailjhara'>Agailjhara</option><option value='Barisal Sadar'>Barisal Sadar</option><option value='Bakerganj'>Bakerganj</option><option value='Banaripara'>Banaripara</option><option value='Gaurnadi'>Gaurnadi</option><option value='Hizla'>Hizla</option><option value='Mehendiganj'>Mehendiganj</option><option value='Wazirpur'>Wazirpur</option>";
            break;
        case 'Bhola':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Bhola Sadar'>Bhola Sadar</option><option value='Burhanuddin'>Burhanuddin</option><option value='Char Fasson'>Char Fasson</option><option value='Daulatkhan'>Daulatkhan</option><option value='Lalmohan'>Lalmohan</option><option value='Manpura'>Manpura</option><option value='Tazumuddin'>Tazumuddin</option>";
            break;
        case 'Jhalokathi':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Jhalokati Sadar'>Jhalokati Sadar</option><option value='Kathalia'>Kathalia</option><option value='Nalchity'>Nalchity</option><option value='Rajapur'>Rajapur</option>";
            break;
        case 'Patuakhali':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Bauphal'>Bauphal</option><option value='Dashmina'>Dashmina</option><option value='Galachipa'>Galachipa</option><option value='Kalapara'>Kalapara</option><option value='Mirzaganj'>Mirzaganj</option><option value='Patuakhali Sadar'>Patuakhali Sadar</option><option value='Dumki'>Dumki</option><option value='Rangabali'>Rangabali</option>";
            break;
        case 'Pirojpur':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Bhandaria'>Bhandaria</option><option value='Kaukhali'>Kaukhali</option><option value='Mathbaria'>Mathbaria</option><option value='Nazirpur'>Nazirpur</option><option value='Nesarabad'>Nesarabad</option><option value='Pirojpur Sadar'>Pirojpur Sadar</option><option value='Zianagar'>Zianagar</option>";
            break; 
        case 'Dinajpur':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Birampur'>Birampur</option><option value='Birganj'>Birganj</option><option value='Biral'>Biral</option><option value='Bochaganj'>Bochaganj</option><option value='Chirirbandar'>Chirirbandar</option><option value='Phulbari'>Phulbari</option><option value='Ghoraghat'>Ghoraghat</option><option value='Hakimpur'>Hakimpur</option><option value='Kaharole'>Kaharole</option><option value='Khansama'>Khansama</option><option value='Dinajpur Sadar'>Dinajpur Sadar</option><option value='Nawabganj'>Nawabganj</option><option value='Parbatipur'>Parbatipur</option>";
            break;
        case 'Gaibandha':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Fulchhari'>Fulchhari</option><option value='Gaibandha sadar'>Gaibandha sadar</option><option value='Gobindaganj'>Gobindaganj</option><option value='Palashbari'>Palashbari</option><option value='Sadullapur'>Sadullapur</option><option value='Saghata'>Saghata</option><option value='Sundarganj'>Sundarganj</option>";
            break;
        case 'Kurigram':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Kurigram Sadar'>Kurigram Sadar</option><option value='Nageshwari'>Nageshwari</option><option value='Bhurungamari'>Bhurungamari</option><option value='Phulbari'>Phulbari</option><option value='Rajarhat'>Rajarhat</option><option value='Ulipur'>Ulipur</option><option value='Chilmari'>Chilmari</option><option value='Rowmari'>Rowmari</option><option value='Char Rajibpur'>Char Rajibpur</option>";
            break;
        case 'Lalmonirhat':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Lalmanirhat Sadar'>Lalmanirhat Sadar</option><option value='Aditmari'>Aditmari</option><option value='Kaliganj'>Kaliganj</option><option value='Hatibandha'>Hatibandha</option><option value='Patgram'>Patgram</option>";
            break;
        case 'Nilphamari':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Nilphamari Sadar'>Nilphamari Sadar</option><option value='Saidpur'>Saidpur</option><option value='Jaldhaka'>Jaldhaka</option><option value='Kishoreganj'>Kishoreganj</option><option value='Domar'>Domar</option><option value='Dimla'>Dimla</option>";
            break;
        case 'Panchagarh':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Panchagarh Sadar'>Panchagarh Sadar</option><option value='Debiganj'>Debiganj</option><option value='Boda'>Boda</option><option value='Atwari'>Atwari</option><option value='Tetulia'>Tetulia</option>";
            break;
        case 'Rangpur':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Badarganj'>Badarganj</option><option value='Mithapukur'>Mithapukur</option><option value='Gangachara'>Gangachara</option><option value='Kaunia'>Kaunia</option><option value='Rangpur Sadar'>Rangpur Sadar</option><option value='Pirgachha'>Pirgachha</option><option value='Pirganj'>Pirganj</option><option value='Taraganj'>Taraganj</option>";
            break;
        case 'Thakurgaon':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Thakurgaon Sadar'>Thakurgaon Sadar</option><option value='Pirganj'>Pirganj</option><option value='Baliadangi'>Baliadangi</option><option value='Haripur'>Haripur</option><option value='Ranisankail'>Ranisankail</option>";
            break;  
        case 'Bogra':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Adamdighi'>Adamdighi</option><option value='Bogra Sadar'>Bogra Sadar</option><option value='Sherpur'>Sherpur</option><option value='Dhunat'>Dhunat</option><option value='Dhupchanchia'>Dhupchanchia</option><option value='Gabtali'>Gabtali</option><option value='Kahaloo'>Kahaloo</option><option value='Nandigram'>Nandigram</option><option value='Sahajanpur'>Sahajanpur</option><option value='Sariakandi'>Sariakandi</option><option value='Shibganj'>Shibganj</option><option value='Sonatala'>Sonatala</option>";
            break;
        case 'Chapinawabganj':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Bholahat'>Bholahat</option><option value='Gomastapur'>Gomastapur</option><option value='Nachole'>Nachole</option><option value='Nawabganj Sadar'>Nawabganj Sadar</option><option value='Shibganj'>Shibganj</option>";
            break;
        case 'Joypurhat':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Joypurhat S'>Joypurhat S</option><option value='Akkelpur'>Akkelpur</option><option value='Kalai'>Kalai</option><option value='Khetlal'>Khetlal</option><option value='Panchbibi'>Panchbibi</option>";
            break;
        case 'Naogaon':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Naogaon Sadar'>Naogaon Sadar</option><option value='Mohadevpur'>Mohadevpur</option><option value='Manda'>Manda</option><option value='Niamatpur'>Niamatpur</option><option value='Atrai'>Atrai</option><option value='Raninagar'>Raninagar</option><option value='Patnitala'>Patnitala</option><option value='Dhamoirhat'>Dhamoirhat</option><option value='Sapahar'>Sapahar</option><option value='Porsha'>Porsha</option><option value='Badalgachhi'>Badalgachhi</option>";
            break;
        case 'Natore':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Natore Sadar'>Natore Sadar</option><option value='Baraigram'>Baraigram</option><option value='Bagatipara'>Bagatipara</option><option value='Lalpur'>Lalpur</option><option value='Natore Sadar'>Natore Sadar</option><option value='Baraigram'>Baraigram</option>";
            break;
        case 'Pabna':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Atgharia'>Atgharia</option><option value='Bera'>Bera</option><option value='Bhangura'>Bhangura</option><option value='Chatmohar'>Chatmohar</option><option value='Faridpur'>Faridpur</option><option value='Ishwardi'>Ishwardi</option><option value='Pabna Sadar'>Pabna Sadar</option><option value='Santhia'>Santhia</option><option value='Sujanagar'>Sujanagar</option>";
            break;
        case 'Rajshahi':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Bagha'>Bagha</option><option value='Bagmara'>Bagmara</option><option value='Charghat'>Charghat</option><option value='Durgapur'>Durgapur</option><option value='Godagari'>Godagari</option><option value='Mohanpur'>Mohanpur</option><option value='Paba'>Paba</option><option value='Puthia'>Puthia</option><option value='Tanore'>Tanore</option>";
            break;
        case 'Sirajganj':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Sirajganj Sadar'>Sirajganj Sadar</option><option value='Belkuchi'>Belkuchi</option><option value='Chauhali'>Chauhali</option><option value='Kamarkhanda'>Kamarkhanda</option><option value='Kazipur'>Kazipur</option><option value='Raiganj'>Raiganj</option><option value='Shahjadpur'>Shahjadpur</option><option value='Tarash'>Tarash</option><option value='Ullahpara'>Ullahpara</option>";
            break;  
        case 'Jamalpur':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Dewanganj'>Dewanganj</option><option value='Baksiganj'>Baksiganj</option><option value='Islampur'>Islampur</option><option value='Jamalpur Sadar'>Jamalpur Sadar</option><option value='Madarganj'>Madarganj</option><option value='Melandaha'>Melandaha</option><option value='Sarishabari'>Sarishabari</option><option value='Narundi Police I.C'>Narundi Police I.C</option>";
            break; 
        case 'Mymensingh':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Bhaluka'>Bhaluka</option><option value='Trishal'>Trishal</option><option value='Haluaghat'>Haluaghat</option><option value='Muktagachha'>Muktagachha</option><option value='Dhobaura'>Dhobaura</option><option value='Fulbaria'>Fulbaria</option><option value='Gaffargaon'>Gaffargaon</option><option value='Gauripur'>Gauripur</option><option value='Ishwarganj'>Ishwarganj</option><option value='Mymensingh Sadar'>Mymensingh Sadar</option><option value='Nandail'>Nandail</option><option value='Phulpur'>Phulpur</option>";
            break; 
        case 'Netrakona':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Kendua'>Kendua </option><option value='Atpara'>Atpara </option><option value='Barhatta'>Barhatta </option><option value='Durgapur'>Durgapur </option><option value='Kalmakanda'>Kalmakanda </option><option value='Madan'>Madan </option><option value='Mohanganj'>Mohanganj </option><option value='Netrakona-S'>Netrakona-S </option><option value='Purbadhala'>Purbadhala </option><option value='Khaliajuri'>Khaliajuri </option>";
            break; 
        case 'Sherpur':
            var upazila_list = "<option disabled selected>Select Your Upazila</option><option value='Jhenaigati'>Jhenaigati</option><option value='Nakla'>Nakla</option><option value='Nalitabari'>Nalitabari</option><option value='Sherpur Sadar'>Sherpur Sadar</option><option value='Sreebardi'>Sreebardi</option>";
            break;    
    }
    document.getElementById('select_upazila').innerHTML = upazila_list;
}
