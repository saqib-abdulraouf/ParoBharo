from apps.products.models import Product

def get_best_sellers(limit=4):
    """
    Fetch the top best selling products.
    """
    return Product.objects.filter(is_best_seller=True, is_featured=True)[:limit]
