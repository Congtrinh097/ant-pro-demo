export default {
    'GET /api/test': (req, res) => {
        console.log(req);
        res.status(200).send({
          data: {
                id: "id",
                name: "trinh",
                birthday: "02/01",
                age: 20,
                address: "add 333, street Ngiye Hung"
            },
          total: 200,
          currentPage: 1,
          pagesize: 10
        });
    },
    'GET /api/getData2': {
        data: {
            id: "id",
            name: "trinh",
            birthday: "02/01",
            age: 20,
            address: "add 333, street Ngiye Hung"
        },
    }
};