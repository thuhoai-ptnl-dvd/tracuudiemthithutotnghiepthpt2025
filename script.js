document.getElementById('searchBtn').addEventListener('click', function () {
  const sbd = document.getElementById('sbd').value.trim();
  const cccd = document.getElementById('cccd').value.trim();

  const allowedSBD = '12020009';
  const allowedCCCD = '079207017782';

  document.getElementById('loading').classList.remove('hidden');
  document.getElementById('result').innerHTML = '';
  document.getElementById('defaultResult').classList.add('hidden');

  setTimeout(() => {
    if (sbd === allowedSBD && cccd === allowedCCCD) {
      const record = {
        SBD: sbd,
        Họ_tên: "Lương Đức Dân",
        Lớp: "12B08",
        NguVan: "8.3",
        Toan: "7.1",
        Mon1: "6.8",
        Mon2: "7.3",
        DTBcm: "7.4",
        KetQua: "ĐẬU"
      };

      document.getElementById('hoten').innerText = record.Họ_tên;
      document.getElementById('lop').innerText = record.Lớp;

      let rowHTML = `
        <tr class="bg-gray-50">
          <td class="border px-2 py-1">1</td>
          <td class="border px-2 py-1">${record.SBD}</td>
          <td class="border px-2 py-1">${record.Họ_tên}</td>
          <td class="border px-2 py-1">${record.NguVan}</td>
          <td class="border px-2 py-1">${record.Toan}</td>
          <td class="border px-2 py-1">${record.Mon1}</td>
          <td class="border px-2 py-1">${record.Mon2}</td>
          <td class="border px-2 py-1">${record.DTBcm}</td>
          <td class="border px-2 py-1 font-semibold text-green-600">${record.KetQua}</td>
        </tr>
      `;

      document.getElementById('scoreTableBody').innerHTML = rowHTML;
      document.getElementById('defaultResult').classList.remove('hidden');
      document.getElementById('loading').classList.add('hidden');
    } else {
      document.getElementById('loading').classList.add('hidden');
      document.getElementById('result').innerHTML =
        `<p class="text-red-600 text-center font-semibold">Không tìm thấy kết quả. Vui lòng kiểm tra lại SBD và CCCD.</p>`;
    }
  }, 1000);
});
