from apps.categories.models import Category

def global_context(request):
    """
    Exposes variables globally across all templates.
    """
    # 1. Fetch all featured categories for navbar and category selectors
    categories = Category.objects.filter(is_featured=True)

    # 2. Safely read cart total item count from session
    cart_count = 0
    if request.session:
        cart_count = request.session.get('cart_item_count', 0)

    # 3. Site Constants
    site_metadata = {
        'name': 'TechNest',
        'tagline': 'Premium Tech Accessories & Desk Setup Ecosystem',
        'support_email': 'support@technest.pk',
        'support_phone': '+92 (21) 111-832-463',
        'support_whatsapp': 'https://wa.me/923000000000',
        'shipping_threshold_rs': 2999
    }

    return {
        'global_categories': categories,
        'global_cart_count': cart_count,
        'site_metadata': site_metadata
    }
