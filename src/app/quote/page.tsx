'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  Package, 
  Home, 
  Building, 
  Truck,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const quoteSchema = z.object({
  // Contact Information
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  
  // Move Origin
  originAddress: z.string().min(5, 'Please enter a complete address'),
  originUnit: z.string().optional(),
  originBuildingType: z.string().min(1, 'Please select building type'),
  originBedrooms: z.string().optional(),
  originStairs: z.string().optional(),
  originElevator: z.string().optional(),
  
  // Move Destination
  destinationAddress: z.string().min(5, 'Please enter a complete address'),
  destinationUnit: z.string().optional(),
  destinationBuildingType: z.string().min(1, 'Please select building type'),
  destinationBedrooms: z.string().optional(),
  destinationStairs: z.string().optional(),
  destinationElevator: z.string().optional(),
  
  // Multiple Stops
  multipleStops: z.boolean(),
  additionalStops: z.string().optional(),
  
  // Move Date & Time
  moveDate: z.string().min(1, 'Please select a move date'),
  preferredTime: z.string().min(1, 'Please select preferred time'),
  
  // Inventory
  livingRoom: z.string().optional(),
  bedroom1: z.string().optional(),
  bedroom2: z.string().optional(),
  bedroom3: z.string().optional(),
  kitchen: z.string().optional(),
  diningRoom: z.string().optional(),
  basement: z.string().optional(),
  garage: z.string().optional(),
  office: z.string().optional(),
  
  smallBoxes: z.string().optional(),
  mediumBoxes: z.string().optional(),
  largeBoxes: z.string().optional(),
  
  // Specialty Items
  piano: z.boolean(),
  pianoType: z.string().optional(),
  appliances: z.array(z.string()).optional(),
  heavyItems: z.array(z.string()).optional(),
  fragileItems: z.string().optional(),
  
  // Service Needs
  packingService: z.string().min(1, 'Please select packing preference'),
  packingRooms: z.string().optional(),
  unpackingService: z.boolean(),
  furnitureAssembly: z.boolean(),
  applianceService: z.boolean(),
  junkRemoval: z.boolean(),
  packagingMaterials: z.boolean(),
  
  // Access & Logistics
  originTruckAccess: z.string().min(1, 'Please select truck accessibility'),
  destinationTruckAccess: z.string().min(1, 'Please select truck accessibility'),
  accessChallenges: z.string().optional(),
  
  // Additional Notes
  additionalNotes: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      multipleStops: false,
      piano: false,
      appliances: [],
      heavyItems: [],
      unpackingService: false,
      furnitureAssembly: false,
      applianceService: false,
      junkRemoval: false,
      packagingMaterials: false,
    }
  });

  const watchedValues = watch();

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Quote form data:', data);
    setSubmitSuccess(true);
    setIsSubmitting(false);
  };

  const buildingTypes = [
    { value: 'house', label: 'House' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'condo', label: 'Condo' },
    { value: 'townhouse', label: 'Townhouse' },
    { value: 'basement', label: 'Basement Suite' },
    { value: 'warehouse', label: 'Warehouse' },
    { value: 'office', label: 'Office' },
    { value: 'other', label: 'Other' }
  ];

  const timeSlots = [
    { value: 'morning', label: '8:00 AM - 12:00 PM' },
    { value: 'afternoon', label: '12:00 PM - 4:00 PM' },
    { value: 'evening', label: '4:00 PM - 8:00 PM' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const applianceOptions = ['Washer', 'Dryer', 'Refrigerator', 'Stove', 'Freezer', 'Dishwasher'];
  const heavyItemOptions = ['Safe', 'Gym Equipment', 'Pool Table', 'Hot Tub', 'Machinery'];

  const steps = [
    { number: 1, title: 'Contact Info', icon: <Phone className="h-5 w-5" /> },
    { number: 2, title: 'Move Details', icon: <MapPin className="h-5 w-5" /> },
    { number: 3, title: 'Date & Time', icon: <Calendar className="h-5 w-5" /> },
    { number: 4, title: 'Inventory', icon: <Package className="h-5 w-5" /> },
    { number: 5, title: 'Services', icon: <Truck className="h-5 w-5" /> },
    { number: 6, title: 'Logistics', icon: <CheckCircle className="h-5 w-5" /> }
  ];

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your quote request. We'll review your information and get back to you within 2 hours with a detailed estimate.
            </p>
            <div className="space-y-4">
              <a href="tel:+14378719288" className="btn-primary w-full text-center block">
                Call Us Now: +1 (437) 871-9288
              </a>
              <button 
                onClick={() => {
                  setSubmitSuccess(false);
                  setCurrentStep(1);
                }}
                className="btn-outline w-full text-center"
              >
                Submit Another Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="heading-2 mb-4">Get Your Free Moving Quote</h1>
          <p className="text-lead max-w-3xl mx-auto">
            Fill out our detailed form to receive an accurate, no-obligation quote for your move. 
            The more information you provide, the more precise your estimate will be.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 overflow-x-auto pb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center space-x-2 ${
                  currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step.number 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span className="text-sm font-medium hidden sm:block">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-2 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            
            {/* Step 1: Contact Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      {...register('name')}
                      className="form-input"
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="form-error">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="form-input"
                      placeholder="(416) 123-4567"
                    />
                    {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      {...register('email')}
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="form-error">{errors.email.message}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Move Details */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Move Details</h3>
                
                {/* Origin */}
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                    <Home className="h-5 w-5 mr-2 text-blue-600" />
                    Moving From (Origin)
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="form-label">Full Address *</label>
                      <input
                        type="text"
                        {...register('originAddress')}
                        className="form-input"
                        placeholder="123 Main St, Toronto, ON M5V 3A1"
                      />
                      {errors.originAddress && <p className="form-error">{errors.originAddress.message}</p>}
                    </div>
                    
                    <div>
                      <label className="form-label">Unit/Apt Number</label>
                      <input
                        type="text"
                        {...register('originUnit')}
                        className="form-input"
                        placeholder="Unit 501"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Building Type *</label>
                      <select {...register('originBuildingType')} className="form-input">
                        <option value="">Select building type</option>
                        {buildingTypes.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                      {errors.originBuildingType && <p className="form-error">{errors.originBuildingType.message}</p>}
                    </div>
                    
                    <div>
                      <label className="form-label">Number of Bedrooms/Size</label>
                      <input
                        type="text"
                        {...register('originBedrooms')}
                        className="form-input"
                        placeholder="e.g., 2 bedroom, 1500 sq ft"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Stairs/Flights</label>
                      <input
                        type="text"
                        {...register('originStairs')}
                        className="form-input"
                        placeholder="e.g., 2nd floor, 15 steps"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Elevator Access</label>
                      <select {...register('originElevator')} className="form-input">
                        <option value="">Select elevator access</option>
                        <option value="available">Available</option>
                        <option value="booked">Available (need to book)</option>
                        <option value="none">No elevator</option>
                        <option value="freight">Freight elevator only</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Destination */}
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                    <Building className="h-5 w-5 mr-2 text-blue-600" />
                    Moving To (Destination)
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="form-label">Full Address *</label>
                      <input
                        type="text"
                        {...register('destinationAddress')}
                        className="form-input"
                        placeholder="456 Oak St, Mississauga, ON L5B 2K1"
                      />
                      {errors.destinationAddress && <p className="form-error">{errors.destinationAddress.message}</p>}
                    </div>
                    
                    <div>
                      <label className="form-label">Unit/Apt Number</label>
                      <input
                        type="text"
                        {...register('destinationUnit')}
                        className="form-input"
                        placeholder="Unit 301"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Building Type *</label>
                      <select {...register('destinationBuildingType')} className="form-input">
                        <option value="">Select building type</option>
                        {buildingTypes.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                      {errors.destinationBuildingType && <p className="form-error">{errors.destinationBuildingType.message}</p>}
                    </div>
                    
                    <div>
                      <label className="form-label">Number of Bedrooms/Size</label>
                      <input
                        type="text"
                        {...register('destinationBedrooms')}
                        className="form-input"
                        placeholder="e.g., 3 bedroom, 2000 sq ft"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Stairs/Flights</label>
                      <input
                        type="text"
                        {...register('destinationStairs')}
                        className="form-input"
                        placeholder="e.g., Ground floor, 3 steps"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Elevator Access</label>
                      <select {...register('destinationElevator')} className="form-input">
                        <option value="">Select elevator access</option>
                        <option value="available">Available</option>
                        <option value="booked">Available (need to book)</option>
                        <option value="none">No elevator</option>
                        <option value="freight">Freight elevator only</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Multiple Stops */}
                <div>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      {...register('multipleStops')}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Multiple drop-off locations?
                    </span>
                  </label>
                  
                  {watchedValues.multipleStops && (
                    <div className="mt-4">
                      <label className="form-label">Additional Stop Addresses</label>
                      <textarea
                        {...register('additionalStops')}
                        rows={3}
                        className="form-input"
                        placeholder="List additional addresses with any special instructions..."
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Date & Time */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Move Date & Time</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Preferred Move Date *</label>
                    <input
                      type="date"
                      {...register('moveDate')}
                      className="form-input"
                      min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.moveDate && <p className="form-error">{errors.moveDate.message}</p>}
                  </div>
                  
                  <div>
                    <label className="form-label">Preferred Time Slot *</label>
                    <select {...register('preferredTime')} className="form-input">
                      <option value="">Select time preference</option>
                      {timeSlots.map(slot => (
                        <option key={slot.value} value={slot.value}>{slot.label}</option>
                      ))}
                    </select>
                    {errors.preferredTime && <p className="form-error">{errors.preferredTime.message}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Inventory */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Inventory List</h3>
                
                {/* Room by Room Inventory */}
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Major Furniture Items by Room</h4>
                  <p className="text-sm text-gray-600 mb-6">
                    List major furniture pieces in each room (e.g., "Queen bed, dresser, 2 nightstands")
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Living Room</label>
                      <textarea
                        {...register('livingRoom')}
                        rows={3}
                        className="form-input"
                        placeholder="e.g., Sofa, TV stand, coffee table, 2 chairs"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Master Bedroom</label>
                      <textarea
                        {...register('bedroom1')}
                        rows={3}
                        className="form-input"
                        placeholder="e.g., King bed, dresser, 2 nightstands, armoire"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Bedroom 2</label>
                      <textarea
                        {...register('bedroom2')}
                        rows={3}
                        className="form-input"
                        placeholder="e.g., Double bed, desk, bookshelf"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Bedroom 3</label>
                      <textarea
                        {...register('bedroom3')}
                        rows={3}
                        className="form-input"
                        placeholder="e.g., Single bed, dresser"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Kitchen</label>
                      <textarea
                        {...register('kitchen')}
                        rows={3}
                        className="form-input"
                        placeholder="e.g., Table, 4 chairs, buffet, microwave"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Dining Room</label>
                      <textarea
                        {...register('diningRoom')}
                        rows={3}
                        className="form-input"
                        placeholder="e.g., Dining table, 6 chairs, china cabinet"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Basement</label>
                      <textarea
                        {...register('basement')}
                        rows={3}
                        className="form-input"
                        placeholder="e.g., Sectional sofa, exercise bike, shelving"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Garage/Storage</label>
                      <textarea
                        {...register('garage')}
                        rows={3}
                        className="form-input"
                        placeholder="e.g., Workbench, tools, seasonal items"
                      />
                    </div>
                  </div>
                </div>

                {/* Boxes */}
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Estimated Number of Boxes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="form-label">Small Boxes</label>
                      <input
                        type="number"
                        {...register('smallBoxes')}
                        className="form-input"
                        placeholder="e.g., 15"
                        min="0"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Medium Boxes</label>
                      <input
                        type="number"
                        {...register('mediumBoxes')}
                        className="form-input"
                        placeholder="e.g., 25"
                        min="0"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Large Boxes</label>
                      <input
                        type="number"
                        {...register('largeBoxes')}
                        className="form-input"
                        placeholder="e.g., 10"
                        min="0"
                      />
                    </div>
                  </div>
                </div>

                {/* Specialty Items */}
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Specialty & Heavy Items</h4>
                  
                  {/* Piano */}
                  <div className="mb-6">
                    <label className="flex items-center space-x-3 mb-3">
                      <input
                        type="checkbox"
                        {...register('piano')}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">Piano</span>
                    </label>
                    
                    {watchedValues.piano && (
                      <div className="ml-7">
                        <select {...register('pianoType')} className="form-input">
                          <option value="">Select piano type</option>
                          <option value="upright">Upright Piano</option>
                          <option value="baby-grand">Baby Grand Piano</option>
                          <option value="grand">Grand Piano</option>
                          <option value="digital">Digital Piano</option>
                          <option value="organ">Organ</option>
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Appliances */}
                  <div className="mb-6">
                    <label className="form-label">Appliances (select all that apply)</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {applianceOptions.map(appliance => (
                        <label key={appliance} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            value={appliance}
                            {...register('appliances')}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{appliance}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Heavy Items */}
                  <div className="mb-6">
                    <label className="form-label">Heavy Items (select all that apply)</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {heavyItemOptions.map(item => (
                        <label key={item} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            value={item}
                            {...register('heavyItems')}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Fragile Items */}
                  <div>
                    <label className="form-label">Fragile/Valuable Items</label>
                    <textarea
                      {...register('fragileItems')}
                      rows={3}
                      className="form-input"
                      placeholder="Describe any antiques, artwork, fragile electronics, or valuable items requiring special care..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Service Needs */}
            {currentStep === 5 && (
              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Service Requirements</h3>
                
                {/* Packing Services */}
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Packing Services</h4>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        value="self-pack"
                        {...register('packingService')}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Self-Pack (I'll pack everything myself)</span>
                    </label>
                    
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        value="partial-pack"
                        {...register('packingService')}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Partial Pack (specific rooms/items only)</span>
                    </label>
                    
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        value="full-pack"
                        {...register('packingService')}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Full Pack (pack everything for me)</span>
                    </label>
                  </div>
                  {errors.packingService && <p className="form-error">{errors.packingService.message}</p>}
                  
                  {watchedValues.packingService === 'partial-pack' && (
                    <div className="mt-4">
                      <label className="form-label">Which rooms/items need packing?</label>
                      <textarea
                        {...register('packingRooms')}
                        rows={3}
                        className="form-input"
                        placeholder="Specify which rooms or specific items you'd like us to pack..."
                      />
                    </div>
                  )}
                </div>

                {/* Additional Services */}
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Additional Services</h4>
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        {...register('unpackingService')}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Unpacking Services</span>
                    </label>
                    
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        {...register('furnitureAssembly')}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Furniture Disassembly/Reassembly</span>
                    </label>
                    
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        {...register('applianceService')}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Appliance Disconnect/Reconnect</span>
                    </label>
                    
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        {...register('junkRemoval')}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Junk Removal</span>
                    </label>
                    
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        {...register('packagingMaterials')}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Supply Packaging Materials (boxes, tape, bubble wrap)</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Access & Logistics */}
            {currentStep === 6 && (
              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Access & Logistics</h3>
                
                {/* Truck Access */}
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Truck Accessibility</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Origin Location *</label>
                      <select {...register('originTruckAccess')} className="form-input">
                        <option value="">Select truck access</option>
                        <option value="excellent">Excellent (direct driveway access)</option>
                        <option value="good">Good (street parking close to door)</option>
                        <option value="limited">Limited (some distance from door)</option>
                        <option value="difficult">Difficult (narrow streets, no close parking)</option>
                        <option value="restricted">Restricted (loading dock, special arrangements needed)</option>
                      </select>
                      {errors.originTruckAccess && <p className="form-error">{errors.originTruckAccess.message}</p>}
                    </div>
                    
                    <div>
                      <label className="form-label">Destination Location *</label>
                      <select {...register('destinationTruckAccess')} className="form-input">
                        <option value="">Select truck access</option>
                        <option value="excellent">Excellent (direct driveway access)</option>
                        <option value="good">Good (street parking close to door)</option>
                        <option value="limited">Limited (some distance from door)</option>
                        <option value="difficult">Difficult (narrow streets, no close parking)</option>
                        <option value="restricted">Restricted (loading dock, special arrangements needed)</option>
                      </select>
                      {errors.destinationTruckAccess && <p className="form-error">{errors.destinationTruckAccess.message}</p>}
                    </div>
                  </div>
                </div>

                {/* Access Challenges */}
                <div>
                  <label className="form-label">Access Challenges or Special Considerations</label>
                  <textarea
                    {...register('accessChallenges')}
                    rows={4}
                    className="form-input"
                    placeholder="Describe any challenges such as narrow hallways, tight corners, low clearances, long walks from truck to door, special permits needed, etc."
                  />
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="form-label">Additional Notes or Special Instructions</label>
                  <textarea
                    {...register('additionalNotes')}
                    rows={4}
                    className="form-input"
                    placeholder="Any other information that would help us provide an accurate quote and ensure a smooth move..."
                  />
                </div>

                {/* Final Summary */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Almost Done!</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    By submitting this form, you'll receive a detailed quote within 2 hours. Our team will review 
                    all the information you've provided to ensure an accurate estimate. If we need any clarification, 
                    we'll contact you using the information provided.
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <p className="text-xs text-gray-600">
                      <strong>Privacy Note:</strong> Your information is secure and will only be used to provide your moving quote. 
                      We do not share your details with third parties.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t border-gray-200 mt-8">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="btn-outline"
                >
                  Previous
                </button>
              ) : (
                <div></div>
              )}
              
              {currentStep < 6 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="btn-primary"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Contact Info */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Need Help or Have Questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Our moving consultants are standing by to assist you with your quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+14378719288" className="btn-primary flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call +1 (437) 871-9288</span>
              </a>
              <a href="mailto:info@northmoving.ca" className="btn-outline flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 