// route mahasiswa
const { CreateMahasiswaRoute } = require('../app/routes/mhs/create.route')
const { ResultsMahasiswaRoute } = require('../app/routes/mhs/results.route')
const { ResultMahasiswaRoute } = require('../app/routes/mhs/result.route')
const { DeleteMahasiswaRoute } = require('../app/routes/mhs/delete.route')
const { UpdateMahasiswaRoute } = require('../app/routes/mhs/update.route')

//route home
const { HomeRoute } = require('../app/routes/home/home.route')
const { AboutRoute } = require('../app/routes/home/about.route')

class Route {
  init() {
    return [
      // init mahasiswa route
      new CreateMahasiswaRoute().route(),
      new ResultsMahasiswaRoute().route(),
      new ResultMahasiswaRoute().route(),
      new DeleteMahasiswaRoute().route(),
      new UpdateMahasiswaRoute().route(),

      //init home route
      new HomeRoute().route(),
      new AboutRoute().route()
    ]
  }
}

module.exports = { Route }
