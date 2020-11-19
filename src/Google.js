import { GoogleSpreadsheet } from "google-spreadsheet";
const doc = new GoogleSpreadsheet(
  "1BjjFhdayN24Fi7hV_0dUZK4GwW7JSTtmqpNXtDYV20Y"
);
const docAlumnos = new GoogleSpreadsheet(
  "1lcnrmA9kCN78yr4aVS2VU6c7-9Z7zZ5PxnsBMRrS1Uo"
);
const docRanking = new GoogleSpreadsheet(
  "1lcnrmA9kCN78yr4aVS2VU6c7-9Z7zZ5PxnsBMRrS1Uo"
);
export async function RankingDatos(options) {
  try {
    await docRanking.useServiceAccountAuth({
      client_email: "pruebastylesheet@prode-eb49d.iam.gserviceaccount.com",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYxAwk3gyIWzEJ\nDosQSJ+/bAbg0WDmG3f5imq3D4xJnZSFYv2ZkoduryT8kRUpxrf+5f/yKs8RlHx3\n1BQFz2GA98/m67wQsOeEQYVFNBjRwKelY/BKn4rNljC65YSV5QdFfY/iO/9Dh+vo\nhvOT7AZ60B+maPI33mDKQz7krV82PvKE8aQPBmGEGCB6vj9ztZe7Z7JaQzOV2sx0\ndUeiAPG1kKBwq16yeFjqgPC+oVzKrXhPXJqvhmhBH6eRMyf0zgZcE35wNUpzXFxI\ntLvzLBGNZdjQ8VSulyivjDA+7JZjw4Xqj7upxcyJMX7irsfrkYf760ZSr4H4Drom\nbpCUWQW/AgMBAAECggEACR7Qksrm+KUTx7Skkh5OhevPJVDwILd3HDYqqi81cu0D\ngaB9VNPYs2pQIlFkcBAQdW60hHgQe2jgCCS95Ug89ql/h2EqOIeMlZV2fWvffMus\nYUVsLShamGzlD+NwB6WayjKgNSOGg+OeLqMP8RQ1oX4XcE9HrBTiC8aj/0cSg3cl\nnOEJUUwy8eBGz9uBzkKqhdP+kfxMMYHaQ7g6qAFacv5Hb1sF/mylqPbXio7LSqZI\nnHLfggo1xwN2ibnvH7B90Krjg6gVzuZXhtLge7J7Q5bSc+tlyC86yGTI22A4C1z/\nb6nEbabp3rIjTZjNYuOAgmoxVsk6duvqiBgOyjQWUQKBgQDTetm0b9vGWthSOlgH\nUsOzZruZv38sFfVpYUb7VmKO8sHcrhXFGHQPCxafh/n/JAwLI8g8MDbyqvTdnFSO\ncqrcq1EQDNZpVLuiWT0z4NLNPJaZHJ3zjbyvGSvPjhGcxWjtDGEvmw6a3DoPjsuv\nj9bY/vYsxSGzGM51xzwOuMJYawKBgQC47PUHJ3a/wKh9arBZmYVF38h3TYDYJGFd\n/95zXNj64aRtHO7X7PtXVTKKAEhUcKh0MEfSElMty//EKiQdySyd8lEChrptVX2g\n8+PAhU8VmFbQYj6XuRrWQkOB39mS1fy4Z6JDKhuXueCUHalo/Im9IElYIDUi1DDG\nRMTsDY/s/QKBgDWH2kWXLu1ln24pAJFR/OGTdpczZvB02nsDOaFzO11ty26dzjrm\ntrH8H4zgMYLI0BedxhieJ7qDVZom8SxhkChtYQaMCVX+McSljB1uok17Ma+uE7lL\nvmAgIfvWvVSOj8G5KXyQZkECz9uSTLKy2TJyT0QD3kTkWZZsiSI82EzjAoGABMNV\nrFF/5YB41oIg+K3TmPEioLAGWYrWVy139VC25f9Z1NWh8T3RW3Z+Tr+jHUmpjRSR\nRP/j1JIkjFDpjTrZQ1gybfY6ZwaErdiaTSMh3lSGJ+ff5NiHsG0UgAvb9sQ8NiO1\nMjWrcEUBW89HxcR7Z7ulJ/fsZnFAsFqlF89hnaECgYEAnemF8xKMEgRmLXOJTaG8\n8HXS/xv435c3yE+C2dpwNEL6JVHiXGIBHL6swpGbCTf/7bw0Jy+6yIj+oqP8qngf\nry4zNBn5lNXhcLHVZ1Yk5+qvuIkK29z5QkAC3UyfEKwk1ufPVcaM1rWkqkxuxwkx\nnOQH0ejywTn4j6FVBkAYyk4=\n-----END PRIVATE KEY-----\n",
    });
    let sheetRanking;
    // eslint-disable-next-line
    switch (options) {
      case "facil":
        await docRanking.loadInfo();
        sheetRanking = docRanking.sheetsById[680153586];
        break;
      case "medio":
        await docRanking.loadInfo();
        sheetRanking = docRanking.sheetsById[1670556542];
        break;

      case "dificil":
        await docRanking.loadInfo();
        sheetRanking = docRanking.sheetsById[224129004];
        break;
    }
    const rows = await sheetRanking.getRows();
    return rows;
    //SE RETORNA FILAS Y FALTARIA MAPEAR PARA MOSTRAR DATOS
  } catch (e) {
    console.error("Error: ", e);
  }
}
export async function Ranking(row, options) {
  try {
    await docRanking.useServiceAccountAuth({
      client_email: "pruebastylesheet@prode-eb49d.iam.gserviceaccount.com",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYxAwk3gyIWzEJ\nDosQSJ+/bAbg0WDmG3f5imq3D4xJnZSFYv2ZkoduryT8kRUpxrf+5f/yKs8RlHx3\n1BQFz2GA98/m67wQsOeEQYVFNBjRwKelY/BKn4rNljC65YSV5QdFfY/iO/9Dh+vo\nhvOT7AZ60B+maPI33mDKQz7krV82PvKE8aQPBmGEGCB6vj9ztZe7Z7JaQzOV2sx0\ndUeiAPG1kKBwq16yeFjqgPC+oVzKrXhPXJqvhmhBH6eRMyf0zgZcE35wNUpzXFxI\ntLvzLBGNZdjQ8VSulyivjDA+7JZjw4Xqj7upxcyJMX7irsfrkYf760ZSr4H4Drom\nbpCUWQW/AgMBAAECggEACR7Qksrm+KUTx7Skkh5OhevPJVDwILd3HDYqqi81cu0D\ngaB9VNPYs2pQIlFkcBAQdW60hHgQe2jgCCS95Ug89ql/h2EqOIeMlZV2fWvffMus\nYUVsLShamGzlD+NwB6WayjKgNSOGg+OeLqMP8RQ1oX4XcE9HrBTiC8aj/0cSg3cl\nnOEJUUwy8eBGz9uBzkKqhdP+kfxMMYHaQ7g6qAFacv5Hb1sF/mylqPbXio7LSqZI\nnHLfggo1xwN2ibnvH7B90Krjg6gVzuZXhtLge7J7Q5bSc+tlyC86yGTI22A4C1z/\nb6nEbabp3rIjTZjNYuOAgmoxVsk6duvqiBgOyjQWUQKBgQDTetm0b9vGWthSOlgH\nUsOzZruZv38sFfVpYUb7VmKO8sHcrhXFGHQPCxafh/n/JAwLI8g8MDbyqvTdnFSO\ncqrcq1EQDNZpVLuiWT0z4NLNPJaZHJ3zjbyvGSvPjhGcxWjtDGEvmw6a3DoPjsuv\nj9bY/vYsxSGzGM51xzwOuMJYawKBgQC47PUHJ3a/wKh9arBZmYVF38h3TYDYJGFd\n/95zXNj64aRtHO7X7PtXVTKKAEhUcKh0MEfSElMty//EKiQdySyd8lEChrptVX2g\n8+PAhU8VmFbQYj6XuRrWQkOB39mS1fy4Z6JDKhuXueCUHalo/Im9IElYIDUi1DDG\nRMTsDY/s/QKBgDWH2kWXLu1ln24pAJFR/OGTdpczZvB02nsDOaFzO11ty26dzjrm\ntrH8H4zgMYLI0BedxhieJ7qDVZom8SxhkChtYQaMCVX+McSljB1uok17Ma+uE7lL\nvmAgIfvWvVSOj8G5KXyQZkECz9uSTLKy2TJyT0QD3kTkWZZsiSI82EzjAoGABMNV\nrFF/5YB41oIg+K3TmPEioLAGWYrWVy139VC25f9Z1NWh8T3RW3Z+Tr+jHUmpjRSR\nRP/j1JIkjFDpjTrZQ1gybfY6ZwaErdiaTSMh3lSGJ+ff5NiHsG0UgAvb9sQ8NiO1\nMjWrcEUBW89HxcR7Z7ulJ/fsZnFAsFqlF89hnaECgYEAnemF8xKMEgRmLXOJTaG8\n8HXS/xv435c3yE+C2dpwNEL6JVHiXGIBHL6swpGbCTf/7bw0Jy+6yIj+oqP8qngf\nry4zNBn5lNXhcLHVZ1Yk5+qvuIkK29z5QkAC3UyfEKwk1ufPVcaM1rWkqkxuxwkx\nnOQH0ejywTn4j6FVBkAYyk4=\n-----END PRIVATE KEY-----\n",
    });
    let sheetRanking;
    // eslint-disable-next-line
    switch (options) {
      case "facil":
        await docRanking.loadInfo();
        sheetRanking = docRanking.sheetsById[680153586];
        break;
      case "medio":
        await docRanking.loadInfo();
        sheetRanking = docRanking.sheetsById[1670556542];
        break;

      case "dificil":
        await docRanking.loadInfo();
        sheetRanking = docRanking.sheetsById[224129004];
        break;
    }

    const rows = await sheetRanking.getRows();
    console.log(rows);
    await sheetRanking.addRow(row);
  } catch (e) {
    console.error("Error: ", e);
  }
}
//Funcion que agrega el prompt al stylesheet
export async function appendSpreadsheet(row, row2) {
  try {
    await doc.useServiceAccountAuth({
      client_email: "pruebastylesheet@prode-eb49d.iam.gserviceaccount.com",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYxAwk3gyIWzEJ\nDosQSJ+/bAbg0WDmG3f5imq3D4xJnZSFYv2ZkoduryT8kRUpxrf+5f/yKs8RlHx3\n1BQFz2GA98/m67wQsOeEQYVFNBjRwKelY/BKn4rNljC65YSV5QdFfY/iO/9Dh+vo\nhvOT7AZ60B+maPI33mDKQz7krV82PvKE8aQPBmGEGCB6vj9ztZe7Z7JaQzOV2sx0\ndUeiAPG1kKBwq16yeFjqgPC+oVzKrXhPXJqvhmhBH6eRMyf0zgZcE35wNUpzXFxI\ntLvzLBGNZdjQ8VSulyivjDA+7JZjw4Xqj7upxcyJMX7irsfrkYf760ZSr4H4Drom\nbpCUWQW/AgMBAAECggEACR7Qksrm+KUTx7Skkh5OhevPJVDwILd3HDYqqi81cu0D\ngaB9VNPYs2pQIlFkcBAQdW60hHgQe2jgCCS95Ug89ql/h2EqOIeMlZV2fWvffMus\nYUVsLShamGzlD+NwB6WayjKgNSOGg+OeLqMP8RQ1oX4XcE9HrBTiC8aj/0cSg3cl\nnOEJUUwy8eBGz9uBzkKqhdP+kfxMMYHaQ7g6qAFacv5Hb1sF/mylqPbXio7LSqZI\nnHLfggo1xwN2ibnvH7B90Krjg6gVzuZXhtLge7J7Q5bSc+tlyC86yGTI22A4C1z/\nb6nEbabp3rIjTZjNYuOAgmoxVsk6duvqiBgOyjQWUQKBgQDTetm0b9vGWthSOlgH\nUsOzZruZv38sFfVpYUb7VmKO8sHcrhXFGHQPCxafh/n/JAwLI8g8MDbyqvTdnFSO\ncqrcq1EQDNZpVLuiWT0z4NLNPJaZHJ3zjbyvGSvPjhGcxWjtDGEvmw6a3DoPjsuv\nj9bY/vYsxSGzGM51xzwOuMJYawKBgQC47PUHJ3a/wKh9arBZmYVF38h3TYDYJGFd\n/95zXNj64aRtHO7X7PtXVTKKAEhUcKh0MEfSElMty//EKiQdySyd8lEChrptVX2g\n8+PAhU8VmFbQYj6XuRrWQkOB39mS1fy4Z6JDKhuXueCUHalo/Im9IElYIDUi1DDG\nRMTsDY/s/QKBgDWH2kWXLu1ln24pAJFR/OGTdpczZvB02nsDOaFzO11ty26dzjrm\ntrH8H4zgMYLI0BedxhieJ7qDVZom8SxhkChtYQaMCVX+McSljB1uok17Ma+uE7lL\nvmAgIfvWvVSOj8G5KXyQZkECz9uSTLKy2TJyT0QD3kTkWZZsiSI82EzjAoGABMNV\nrFF/5YB41oIg+K3TmPEioLAGWYrWVy139VC25f9Z1NWh8T3RW3Z+Tr+jHUmpjRSR\nRP/j1JIkjFDpjTrZQ1gybfY6ZwaErdiaTSMh3lSGJ+ff5NiHsG0UgAvb9sQ8NiO1\nMjWrcEUBW89HxcR7Z7ulJ/fsZnFAsFqlF89hnaECgYEAnemF8xKMEgRmLXOJTaG8\n8HXS/xv435c3yE+C2dpwNEL6JVHiXGIBHL6swpGbCTf/7bw0Jy+6yIj+oqP8qngf\nry4zNBn5lNXhcLHVZ1Yk5+qvuIkK29z5QkAC3UyfEKwk1ufPVcaM1rWkqkxuxwkx\nnOQH0ejywTn4j6FVBkAYyk4=\n-----END PRIVATE KEY-----\n",
    });
    await docAlumnos.useServiceAccountAuth({
      client_email: "pruebastylesheet@prode-eb49d.iam.gserviceaccount.com",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYxAwk3gyIWzEJ\nDosQSJ+/bAbg0WDmG3f5imq3D4xJnZSFYv2ZkoduryT8kRUpxrf+5f/yKs8RlHx3\n1BQFz2GA98/m67wQsOeEQYVFNBjRwKelY/BKn4rNljC65YSV5QdFfY/iO/9Dh+vo\nhvOT7AZ60B+maPI33mDKQz7krV82PvKE8aQPBmGEGCB6vj9ztZe7Z7JaQzOV2sx0\ndUeiAPG1kKBwq16yeFjqgPC+oVzKrXhPXJqvhmhBH6eRMyf0zgZcE35wNUpzXFxI\ntLvzLBGNZdjQ8VSulyivjDA+7JZjw4Xqj7upxcyJMX7irsfrkYf760ZSr4H4Drom\nbpCUWQW/AgMBAAECggEACR7Qksrm+KUTx7Skkh5OhevPJVDwILd3HDYqqi81cu0D\ngaB9VNPYs2pQIlFkcBAQdW60hHgQe2jgCCS95Ug89ql/h2EqOIeMlZV2fWvffMus\nYUVsLShamGzlD+NwB6WayjKgNSOGg+OeLqMP8RQ1oX4XcE9HrBTiC8aj/0cSg3cl\nnOEJUUwy8eBGz9uBzkKqhdP+kfxMMYHaQ7g6qAFacv5Hb1sF/mylqPbXio7LSqZI\nnHLfggo1xwN2ibnvH7B90Krjg6gVzuZXhtLge7J7Q5bSc+tlyC86yGTI22A4C1z/\nb6nEbabp3rIjTZjNYuOAgmoxVsk6duvqiBgOyjQWUQKBgQDTetm0b9vGWthSOlgH\nUsOzZruZv38sFfVpYUb7VmKO8sHcrhXFGHQPCxafh/n/JAwLI8g8MDbyqvTdnFSO\ncqrcq1EQDNZpVLuiWT0z4NLNPJaZHJ3zjbyvGSvPjhGcxWjtDGEvmw6a3DoPjsuv\nj9bY/vYsxSGzGM51xzwOuMJYawKBgQC47PUHJ3a/wKh9arBZmYVF38h3TYDYJGFd\n/95zXNj64aRtHO7X7PtXVTKKAEhUcKh0MEfSElMty//EKiQdySyd8lEChrptVX2g\n8+PAhU8VmFbQYj6XuRrWQkOB39mS1fy4Z6JDKhuXueCUHalo/Im9IElYIDUi1DDG\nRMTsDY/s/QKBgDWH2kWXLu1ln24pAJFR/OGTdpczZvB02nsDOaFzO11ty26dzjrm\ntrH8H4zgMYLI0BedxhieJ7qDVZom8SxhkChtYQaMCVX+McSljB1uok17Ma+uE7lL\nvmAgIfvWvVSOj8G5KXyQZkECz9uSTLKy2TJyT0QD3kTkWZZsiSI82EzjAoGABMNV\nrFF/5YB41oIg+K3TmPEioLAGWYrWVy139VC25f9Z1NWh8T3RW3Z+Tr+jHUmpjRSR\nRP/j1JIkjFDpjTrZQ1gybfY6ZwaErdiaTSMh3lSGJ+ff5NiHsG0UgAvb9sQ8NiO1\nMjWrcEUBW89HxcR7Z7ulJ/fsZnFAsFqlF89hnaECgYEAnemF8xKMEgRmLXOJTaG8\n8HXS/xv435c3yE+C2dpwNEL6JVHiXGIBHL6swpGbCTf/7bw0Jy+6yIj+oqP8qngf\nry4zNBn5lNXhcLHVZ1Yk5+qvuIkK29z5QkAC3UyfEKwk1ufPVcaM1rWkqkxuxwkx\nnOQH0ejywTn4j6FVBkAYyk4=\n-----END PRIVATE KEY-----\n",
    });
    await docAlumnos.useServiceAccountAuth({
      client_email: "pruebastylesheet@prode-eb49d.iam.gserviceaccount.com",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYxAwk3gyIWzEJ\nDosQSJ+/bAbg0WDmG3f5imq3D4xJnZSFYv2ZkoduryT8kRUpxrf+5f/yKs8RlHx3\n1BQFz2GA98/m67wQsOeEQYVFNBjRwKelY/BKn4rNljC65YSV5QdFfY/iO/9Dh+vo\nhvOT7AZ60B+maPI33mDKQz7krV82PvKE8aQPBmGEGCB6vj9ztZe7Z7JaQzOV2sx0\ndUeiAPG1kKBwq16yeFjqgPC+oVzKrXhPXJqvhmhBH6eRMyf0zgZcE35wNUpzXFxI\ntLvzLBGNZdjQ8VSulyivjDA+7JZjw4Xqj7upxcyJMX7irsfrkYf760ZSr4H4Drom\nbpCUWQW/AgMBAAECggEACR7Qksrm+KUTx7Skkh5OhevPJVDwILd3HDYqqi81cu0D\ngaB9VNPYs2pQIlFkcBAQdW60hHgQe2jgCCS95Ug89ql/h2EqOIeMlZV2fWvffMus\nYUVsLShamGzlD+NwB6WayjKgNSOGg+OeLqMP8RQ1oX4XcE9HrBTiC8aj/0cSg3cl\nnOEJUUwy8eBGz9uBzkKqhdP+kfxMMYHaQ7g6qAFacv5Hb1sF/mylqPbXio7LSqZI\nnHLfggo1xwN2ibnvH7B90Krjg6gVzuZXhtLge7J7Q5bSc+tlyC86yGTI22A4C1z/\nb6nEbabp3rIjTZjNYuOAgmoxVsk6duvqiBgOyjQWUQKBgQDTetm0b9vGWthSOlgH\nUsOzZruZv38sFfVpYUb7VmKO8sHcrhXFGHQPCxafh/n/JAwLI8g8MDbyqvTdnFSO\ncqrcq1EQDNZpVLuiWT0z4NLNPJaZHJ3zjbyvGSvPjhGcxWjtDGEvmw6a3DoPjsuv\nj9bY/vYsxSGzGM51xzwOuMJYawKBgQC47PUHJ3a/wKh9arBZmYVF38h3TYDYJGFd\n/95zXNj64aRtHO7X7PtXVTKKAEhUcKh0MEfSElMty//EKiQdySyd8lEChrptVX2g\n8+PAhU8VmFbQYj6XuRrWQkOB39mS1fy4Z6JDKhuXueCUHalo/Im9IElYIDUi1DDG\nRMTsDY/s/QKBgDWH2kWXLu1ln24pAJFR/OGTdpczZvB02nsDOaFzO11ty26dzjrm\ntrH8H4zgMYLI0BedxhieJ7qDVZom8SxhkChtYQaMCVX+McSljB1uok17Ma+uE7lL\nvmAgIfvWvVSOj8G5KXyQZkECz9uSTLKy2TJyT0QD3kTkWZZsiSI82EzjAoGABMNV\nrFF/5YB41oIg+K3TmPEioLAGWYrWVy139VC25f9Z1NWh8T3RW3Z+Tr+jHUmpjRSR\nRP/j1JIkjFDpjTrZQ1gybfY6ZwaErdiaTSMh3lSGJ+ff5NiHsG0UgAvb9sQ8NiO1\nMjWrcEUBW89HxcR7Z7ulJ/fsZnFAsFqlF89hnaECgYEAnemF8xKMEgRmLXOJTaG8\n8HXS/xv435c3yE+C2dpwNEL6JVHiXGIBHL6swpGbCTf/7bw0Jy+6yIj+oqP8qngf\nry4zNBn5lNXhcLHVZ1Yk5+qvuIkK29z5QkAC3UyfEKwk1ufPVcaM1rWkqkxuxwkx\nnOQH0ejywTn4j6FVBkAYyk4=\n-----END PRIVATE KEY-----\n",
    });
    // loads document properties and worksheets
    await doc.loadInfo();
    await docAlumnos.loadInfo();

    const sheet = doc.sheetsById[1202433785];
    const sheetAlumnos = docAlumnos.sheetsById[687274045];

    await sheet.addRow(row);

    await sheetAlumnos.addRow(row2);
  } catch (e) {
    console.error("Error: ", e);
  }
}
