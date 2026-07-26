from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = 'home/home.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        # Mock featured categories matching templates/home/components/categories.html loop fields
        context['featured_categories'] = [
            {
                'name': 'Headphones',
                'icon': 'bi-headphones',
                'description': 'Over-ear audio gear for pure studio immersion',
            },
            {
                'name': 'Earbuds',
                'icon': 'bi-earbuds',
                'description': 'True wireless in-ear buds for active lifecycles',
            },
            {
                'name': 'Laptops',
                'icon': 'bi-laptop',
                'description': 'High-performance mobile workspaces',
            },
            {
                'name': 'Smart Watches',
                'icon': 'bi-watch',
                'description': 'Premium companion screens for your wrist',
            },
            {
                'name': 'Speakers',
                'icon': 'bi-speaker',
                'description': 'Acoustic power to fill your room',
            },
            {
                'name': 'Keyboards & Mice',
                'icon': 'bi-keyboard',
                'description': 'Tactile input tools for absolute precision',
            },
        ]

        # Mock best sellers matching templates/home/components/best_sellers.html loop fields
        context['best_sellers'] = [
            {
                'name': 'NexIon Wave Pro',
                'badge': 'BEST SELLER',
                'icon': 'bi-headphones',
                'category': {'name': 'Headphones'},
                'rating': '4.9',
                'review_count': '128',
                'description': 'Active noise cancellation headphones with up to 50 hours of battery life and high-res wireless audio.',
                'price': 7999,
            },
            {
                'name': 'NexIon Beat X1',
                'badge': 'NEW ARRIVAL',
                'icon': 'bi-earbuds',
                'category': {'name': 'Earbuds'},
                'rating': '4.8',
                'review_count': '94',
                'description': 'True wireless audiophile earbuds featuring ultra-low latency gaming mode and hybrid ANC.',
                'price': 4999,
            },
            {
                'name': 'MagFlow 3-in-1 Charging Dock',
                'badge': 'POPULAR',
                'icon': 'bi-lightning-charge',
                'category': {'name': 'Cables & Chargers'},
                'rating': '4.7',
                'review_count': '86',
                'description': 'Minimalist magnetic fast charging stand for iPhone, Apple Watch, and AirPods in one premium finish.',
                'price': 3499,
            },
            {
                'name': 'AeroType Low-Profile Keyboard',
                'badge': 'FEATURED',
                'icon': 'bi-keyboard',
                'category': {'name': 'Keyboards & Mice'},
                'rating': '4.9',
                'review_count': '112',
                'description': 'Ultra-slim mechanical keyboard with tactile brown switches, wireless connection, and aluminum top frame.',
                'price': 8999,
            },
        ]

        # Mock dynamic Bundles list
        context['bundles'] = [
            {
                'name': 'Apex Gamer Setup',
                'badge': 'GAMING GEAR',
                'save_tag': 'SAVE 15%',
                'description': 'The ultimate high-performance set to match your rig and light up your workspace.',
                'items': [
                    'AeroType Low-Profile Mechanical Keyboard',
                    'ExoDesk Merino Felt Desk Mat (Large)',
                    'High-Speed Nylon USB-C Gaming Cable (2m)'
                ],
                'original_price': 21497,
                'discounted_price': 18272
            },
            {
                'name': 'Professional Ecosystem',
                'badge': 'OFFICE SETUPS',
                'save_tag': 'SAVE 20%',
                'description': 'Designed to eliminate cable spaghetti and keep laptops running cool during heavy workloads.',
                'items': [
                    'AlumDock Vertical Laptop Stand',
                    'Apex GaN 100W Desktop Fast Charger',
                    'MagFlow 3-in-1 Charging Dock'
                ],
                'original_price': 20497,
                'discounted_price': 16397
            }
        ]

        return context
