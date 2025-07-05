// Get products by user ID
router.get('/user/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const products = await Product.find({ userId });
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user products' });
    }
  });
  