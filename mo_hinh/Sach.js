const mongoose = require('mongoose');


const sachSchema = new mongoose.Schema({
 
  TenSach: { type: String, required: true },
  DonGia: { type: Number, required: true },
  SoQuyen: { type: Number, required: true },
  NamXuatBan: { type: Number, required: true },
  MaNXB: { type: mongoose.Schema.Types.ObjectId, ref: 'NhaXuatBan', required: true },
  NguonGoc: { type: String, required: true },
  MoTa: { type: String, required: true },
  Anh: { type: String } // Đường dẫn ảnh
}, { collection: 'Sach' });

module.exports = mongoose.model('Sach', sachSchema);
