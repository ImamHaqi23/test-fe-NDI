// Sementara di komen kare API masih problem
import axios from 'axios';

const BASE_URL = 'http://103.31.39.176:1000/ndi/login';

export const login = async (username, password) => {
  try {
    const { data } = await axios.post(
      BASE_URL,
      {
        id_daerah: 212,
        username: username,
        password: password,
        tahun: 2025,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    const err = error.response?.data?.message || 'Login gagal';
    throw new Error(err);
  }
};

// Sementara gunakan ini
// import axios from 'axios';

// const BASE_URL = 'http://localhost:4000/users';

// export const login = async (email, password) => {
//   try {
//     const res = await axios.get(BASE_URL);
//     const user = res.data.find(
//       (u) => u.email === email && u.password === password
//     );

//     if (user) {
//       return {
//         message: 'Sukses Login',
//         code: 200,
//         status: true,
//         dataProfile: {
//           uuid: 'fake-uuid',
//           email: user.email,
//           id: user.id,
//           clientId: user.clientId,
//           idRole: user.idRole,
//         },
//       };
//     } else {
//       throw {
//         message: 'Terlalu sering salah Password segera hubungi Admin',
//         code: 405,
//         status: false,
//       };
//     }
//   } catch (error) {
//     console.error('Login error:', error);
//     throw error.response?.data || { message: 'Login gagal' };
//   }
// };
